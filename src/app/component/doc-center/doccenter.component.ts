import { SelectionModel } from "@angular/cdk/collections";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Document } from "src/app/model/document.model";

@Component({
    selector: 'doccenter-comp',
    templateUrl: './doccenter.component.html',
    styleUrls: ['./doccenter.component.scss']
})
export class DocCenterComponent implements OnInit, AfterViewInit {
    documents: Document[] = [
        { docId: '000000002', name: 'test doc 0', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000003', name: 'test doc 1', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000004', name: 'test doc 2', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000005', name: 'test doc 3', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000006', name: 'test doc 4', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000007', name: 'test doc 5', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000008', name: 'test doc 6', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000002', name: 'test doc 0', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000003', name: 'test doc 1', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000004', name: 'test doc 2', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000005', name: 'test doc 3', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000006', name: 'test doc 4', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000007', name: 'test doc 5', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000008', name: 'test doc 6', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000002', name: 'test doc 0', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000003', name: 'test doc 1', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000004', name: 'test doc 2', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000005', name: 'test doc 3', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000006', name: 'test doc 4', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000007', name: 'test doc 5', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
        { docId: '000000008', name: 'test doc 6', last_modified: '2022/08/17 10:11', owner: 'user', file_size: "1" },
    ];
    columns: string[] = ['select', 'name', 'owner', 'last_modified', 'docId', 'file_size'];
    selection = new SelectionModel<Document>(true, []);
    dataSource: MatTableDataSource<Document>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() { }

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.documents);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    toggleAllRows() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
}