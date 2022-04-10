import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'topnav-comp',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    ngOnInit(): void {
    }
    checkLoggedin() {
        if (document.cookie.indexOf('ai-amadeus.auth=') === -1) return false;
        else return true;
    }
    logout() {
        document.cookie = 'ai-amadeus.auth'+'=; Max-Age=-99999999;';
    }
}