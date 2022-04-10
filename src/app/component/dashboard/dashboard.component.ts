import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";

@Component({
    selector: 'dashboard-comp',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
    houses;
    constructor(private service: AppService){}
    ngOnInit() {
        const request = {
            username : 'demo'
        }
        this.service.getHouse(request).subscribe({
            next: (data) => {
                this.houses = data;
            }
        })
    }
}