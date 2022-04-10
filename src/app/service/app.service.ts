import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    getData() {
        const url = "/assets/data.json" ;
        return this.http.get(url, {reportProgress: true, responseType: "json"});
    }
    saveHouse(request) {
        const url = "/api/savehouse";
        return this.http.post(url, request, {reportProgress: true, responseType: "json"});
    }
    getHouse(request) {
        const url = "/api/getHouses";
        return this.http.get(url, request);
    }
}