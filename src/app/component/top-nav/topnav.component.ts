import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/service/auth.service";

@Component({
    selector: 'topnav-comp',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    isLoggedIn: boolean = false;
    constructor(private authService: AuthService) {}

    ngOnInit(): void {
        this.authService.checkLoggedin().subscribe({
            next: (data: any) => {
                this.isLoggedIn = (data.rspCde === 0);
            },
            error: (error) => {
                console.log(error);
            }
        })
    }
   
}