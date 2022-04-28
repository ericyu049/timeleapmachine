import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginRequest, LoginResponse, RefreshTokenRequest, RefreshTokenResponse, SignUpRequest, SignUpResponse } from "../model/login.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login(request: LoginRequest): Observable<LoginResponse> {
        return this.http.post<LoginResponse>('/auth/login', request, { reportProgress: true, responseType: "json" });
    }
    checkLoggedin() {
        return this.http.post('/auth/isLoggedin', { reportProgress: true, responseType: "json" });
    }
    signup(request: SignUpRequest): Observable<SignUpResponse> {
        return this.http.post<SignUpResponse>('/auth/signup', request, { reportProgress: true, responseType: "json" });
    }
    refreshToken(request: RefreshTokenRequest): Observable<RefreshTokenResponse> {
        return this.http.post<RefreshTokenResponse>('/auth/refreshToken', request, { reportProgress: true, responseType: "json" });
    }
}