import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginResponse, SignUpResponse } from "src/app/model/login.model";
import { AuthService } from "src/app/service/auth.service";

@Component({
    selector: 'signup-comp',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    signupForm !: FormGroup;

    constructor(private fb: FormBuilder, private readonly authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.signupForm = this.fb.group({
            username: [null, [Validators.required]],
            password: [null, [Validators.required]],
            repassword: [null, [Validators.required]],
            email: [null, [Validators.required]],
        });
    }
    signup(): void {
        this.authService.signup(this.signupForm.value).subscribe({
            next: (data: SignUpResponse) => {
                if (data.rspCde === 0) {
                
                }
            },
            error: (error) => console.log('error: ', error),
            complete: () => console.log('request completed')
        })
    }
}