import { Component, Input } from "@angular/core";
import * as openDocObs from 'src/app/service/opendoc.service';

@Component({
    selector: 'document-comp', 
    templateUrl: './document.component.html',
    styleUrls: ['./document.component.scss']
})
export class DocumentComponent {
    @Input() docId;
    constructor() {
    }
    return() {
        openDocObs.openDoc.next(false);
    }
}