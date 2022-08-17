import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Audit } from "src/app/model/audit.model";

@Component({
    selector: 'audit-comp',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss']
})
export class AuditComponent implements OnInit, AfterViewInit  {
    audits: Audit[] = [
        { date: '2022/08/17 09:35', action: 'View' },
        { date: '2022/08/17 09:34', action: 'Comment' },
        { date: '2022/08/17 09:33', action: 'View' },
        { date: '2022/08/17 09:32', action: 'View' },
        { date: '2022/08/17 09:31', action: 'Comment' },
        { date: '2022/08/17 09:30', action: 'Comment' },
    ];
    columns: string[] = ['date', 'action'];
    dataSource: MatTableDataSource<Audit>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor() {}

    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.audits);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}