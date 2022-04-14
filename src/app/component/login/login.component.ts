import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginResponse } from "../../model/login.model";
import { AuthService } from "../../service/auth.service";

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm !: FormGroup;

    constructor(private fb: FormBuilder, private readonly authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
        });
    }
    login(): void {
        this.authService.login(this.loginForm.value).subscribe({
            next: (data: LoginResponse) => {
                if (data.rspCde === 0) {
                    //navigate 
                }
            },
            error: (error) => console.log('error: ', error),
            complete: () => console.log('request completed')
        })
    }
}