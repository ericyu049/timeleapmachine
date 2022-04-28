import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.checkLoggedin().pipe(
            map((data: any) => {
                if (data.rspCde === 0 ) return true;
                else{
                    this.router.navigate(["login"],{ queryParams: { returnUrl: route.url} });
                    return false;
                }
            }),
            catchError(error => {
                this.router.navigate(["login"],{ queryParams: { returnUrl: route.url} });
                console.log('Check login error: ', error)
                return of(false);
            })
        )
    }
}