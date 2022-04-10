import { Component, OnInit } from "@angular/core";
import { AppService } from "src/app/service/app.service";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    selectedPlace;
    constructor(private service: AppService) {

    }
    ngOnInit(): void {

    }
    handleSelectedPlace(event) {
        console.log('selected: ', event);
        this.selectedPlace = event;
    }
    saveHouse() {
        const request = {
            username: 'demo',
            house: this.selectedPlace.FULLADDRESS
        }
        this.service.saveHouse(request).subscribe({
            next: (data) => {
                console.log('data: ', data)
            },
            error: (error) => {console.log('error: ', error)}
        });
    }
}