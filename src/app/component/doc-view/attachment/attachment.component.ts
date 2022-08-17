import { Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Attachment } from "src/app/model/attach.model";

@Component({
    selector: 'attach-comp',
    templateUrl: './attachment.component.html',
    styleUrls: ['./attachment.component.scss']
})
export class AttachmentComponent {
    attachments: Attachment[] = [
        { docId: '000000002', name: 'test doc 0', upload_date: '2022/08/17 10:11' },
        { docId: '000000003', name: 'test doc 1', upload_date: '2022/08/17 10:11' },
        { docId: '000000004', name: 'test doc 2', upload_date: '2022/08/17 10:11' },
        { docId: '000000005', name: 'test doc 3', upload_date: '2022/08/17 10:11' },
        { docId: '000000006', name: 'test doc 4', upload_date: '2022/08/17 10:11' },
        { docId: '000000007', name: 'test doc 5', upload_date: '2022/08/17 10:11' },
        { docId: '000000008', name: 'test doc 6', upload_date: '2022/08/17 10:11' },
    ];
    columns: string[] = ['name','docId', 'upload_date'];
    dataSource: MatTableDataSource<Attachment>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() { }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.attachments);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}