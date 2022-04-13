import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {;
    constructor(private service: AppService) {

    }
    ngOnInit(): void {

    }
}