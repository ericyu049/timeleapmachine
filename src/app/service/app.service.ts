import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AppService {
    constructor(private http: HttpClient) {

    }
    getData() {
        const url = "/assets/data.json" 
        return this.http.get(url, {reportProgress: true, responseType: "json"});
    }
}