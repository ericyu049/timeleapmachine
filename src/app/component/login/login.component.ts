import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginResponse } from "../../model/login.model";
import { LoginService } from "../../service/login.service";

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm !: FormGroup;

    constructor(private fb: FormBuilder, private readonly loginService: LoginService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }
    login(): void {
        this.loginService.login(this.loginForm.value).subscribe({
            next: (data: LoginResponse) => {
                if (data.rspCde === 0) {
                    document.cookie = "ai-amadeus.auth=" + data.token + "; ai-amadeus.reauth=" + data.refreshToken;
                    this.router.navigate(['/dashboard']);
                }
            },
            error: (error) => console.log('error: ', error),
            complete: () => console.log('request completed')
        })
    }
}