import { Component } from "@angular/core";

@Component({
    selector: 'index-comp',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    index = {
        docId: '000001',
        name: 'Form 9465 - Installment Agreement Request',
        owner: 'Nao Kosaka',
        upload_date: '2022/08/16 21:55:00',
        modified: '2022/08/16 22:27:00',
        page_count: 2,
        file_size: '2.3MB',
        editable: true
    }
}