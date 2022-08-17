import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
    selector: 'view-comp',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ViewComponent implements OnInit, AfterViewInit {
    pdfjs: any;
    pdfjsDoneLoading: boolean = false;
    private pdfjsLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);
    private pdfjsLoaded$obs: Observable<boolean> = this.pdfjsLoaded.asObservable();

    hasError: boolean = false;
    pdfDoc;
    pageCount: number;
    pageRendering: boolean = false;
    scale: number = 1;

    @ViewChild('container') container: ElementRef<HTMLDivElement>;

    constructor() {
        window['pdfjs-dist/build/pdf'] ? this.loadWorker() : this.loadPdfjs();
    }
    loadWorker() {
        this.pdfjs = window['pdfjs-dist/build/pdf'];
        this.pdfjs.GlobalWorkerOptions.workerSrc = '/assets/pdfjs_2.15.349/build/pdf.worker.js';
        this.pdfjsLoaded.next(true);
        return;
    }
    loadPdfjs() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'pdfjs';
        script.src = '/assets/pdfjs_2.15.349/build/pdf.js';
        const node = document.head.appendChild(script);
        node.onload = (element) => {
            this.loadWorker();
        }
    }
    ngOnInit() {
        // fetch document
    }
    ngAfterViewInit() {
        this.pdfjsLoaded$obs.subscribe(
            (next) => {
                if (next) {
                    const param = '/assets/test2.pdf';
                    this.pdfjs.getDocument(param).promise.then(
                        async (pdfDoc_) => {
                            this.pdfjsDoneLoading = true;
                            this.pdfDoc = pdfDoc_;
                            this.pageCount = this.pdfDoc._pdfInfo.numPages;
                            this.renderAllPages();

                            // annotation stuff below 
                        },
                        (error) => {
                            this.pdfjsDoneLoading = true;
                            this.hasError = true;
                        }
                    )
                }
            }
        )
    }
    async renderPage(num, scale) {
        this.pageRendering = true;
        const page = await this.pdfDoc.getPage(num);

        const pageWrapper = document.createElement('div');
        const textdiv = document.createElement('div');
        const annodiv = document.createElement('div');
        const canvas = document.createElement('canvas');

        pageWrapper.id = 'page_' + num;
        pageWrapper.className = 'pageWrapper';
        textdiv.className = 'textLayer';
        annodiv.className = 'annotationLayer';

        pageWrapper.append(textdiv, annodiv, canvas);
        this.container.nativeElement.appendChild(pageWrapper);

        const viewport = page.getViewport({ scale });
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        pageWrapper.style.minWidth = viewport.width + 'px';

        let renderTask = page.render({
            canvasContext: context,
            viewport
        });

        renderTask.promise.then(
            async () => {
                const textContent = await page.getTextContent();
                textdiv.style.height = viewport.height + 'px';
                textdiv.style.width = viewport.width + 'px';
                while (textdiv.firstChild) {
                    textdiv.removeChild(textdiv.firstChild);
                }
                this.pdfjs.renderTextLayer({
                    textContent,
                    container: textdiv,
                    viewport
                });

                const annotationContent = await page.getAnnotations();
                annodiv.style.top = '-' + viewport.height / 2 + 'px';
                annodiv.style.transform = 'translate(0px, ' + canvas.height / 2 + 'px)';
                try {
                    this.pdfjs.AnnotationLayer.render({
                        viewport: viewport.clone({ doneFlip: true }),
                        div: annodiv,
                        annotations: annotationContent,
                        annotoationStorage: this.pdfDoc.annotationStorage,
                        renderForms: true,
                        page: page
                    })
                }
                catch (e) {
                    console.log(e);
                }
            }
        )
    }
    renderAllPages() {
        for (let page = 1; page <= this.pageCount; page++) {
            this.renderPage(page, this.scale);
        }
    }
    removeAllPages() {
        for (let page = 1; page <= this.pageCount; page++) {
            this.container.nativeElement.removeChild(this.container.nativeElement.firstChild);
        }
    }
    zoomIn() {
        this.scale = this.scale + 0.25;
        this.removeAllPages();
        this.renderAllPages();
    }
    zoomOut() {
        this.scale = this.scale - 0.25;
        this.removeAllPages();
        this.renderAllPages();
    }
    download() {

    }
    save() {
        
    }
}