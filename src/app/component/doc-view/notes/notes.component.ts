import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { Comment } from "src/app/model/comment.model";

@Component({
    selector: 'notes-comp',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {
    comments: Comment[] = [
        { date: '2022/08/16 23:10', comment: 'hello world!' },
        { date: '2022/08/16 23:10', comment: 'hello world!' },
        { date: '2022/08/16 23:10', comment: 'hello world!' },
        { date: '2022/08/16 23:10', comment: 'hello world!' },
        { date: '2022/08/16 23:10', comment: 'hello world!' },
        { date: '2022/08/16 23:11', comment: 'hello world!!' }
    ];
    notes: string;
    noteForm = this.fb.group({ note: ['', Validators.required] });
    columns: string[] = ['date', 'comment'];
    dataSource: MatTableDataSource<Comment>;
    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(private fb: FormBuilder) { }
    ngOnInit() {
        this.dataSource = new MatTableDataSource(this.comments);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
    submit() {

    }
}