import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse } from "../model/login.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(request: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>('/auth/login', request, { reportProgress: true, responseType: "json" });
    }
    refreshToken(request: RefreshTokenRequest): Observable<RefreshTokenResponse> {
        return this.http.post<RefreshTokenResponse>('/auth/refreshToken', request, { reportProgress: true, responseType: "json" });
    }
}