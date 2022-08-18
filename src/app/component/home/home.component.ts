import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";
import * as openDocObs from 'src/app/service/opendoc.service';

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    showDoc:boolean = false;
    constructor(private service: AppService) {
        openDocObs.openDoc$obs.subscribe(
            (next) => {
                if (next) {
                    this.showDoc = next;
                }
            })
    }
    ngOnInit(): void {

    }
}