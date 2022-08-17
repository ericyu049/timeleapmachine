import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'notes-comp',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.scss']
})
export class NotesComponent {
    notes: string;
    noteForm = this.fb.group({
        note: ['', Validators.required]
    });
    columns: string[] = ['date', 'comment'];
    comments = [
        {
            date: '2022/08/16 23:10',
            comment: 'hello world!'
        },
        {
            date: '2022/08/16 23:11',
            comment: 'hello world!!'
        }
    ]
    constructor(private fb: FormBuilder) {

    }
    submit() {

    }
}