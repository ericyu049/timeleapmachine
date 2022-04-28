import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";
import { AuthService } from "src/app/service/auth.service";

@Component({
    selector: 'dashboard-comp',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
    constructor(private service: AppService){}
    ngOnInit() {
    }
}