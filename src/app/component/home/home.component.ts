import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'home-comp',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    selectedPlace;
    ngOnInit(): void {

    }
    handleSelectedPlace(event) {
        console.log('selected: ', event);
        this.selectedPlace = event;
    }
}