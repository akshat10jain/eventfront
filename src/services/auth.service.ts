import { Injectable } from '@angular/core'
import { Router } from "@angular/router";
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class authService implements CanActivate {
    headers
    public link = 'http://localhost:3000/api/'
    constructor(private http: Http, private router: Router) {
        this.headers = new Headers()
        this.headers.append('Content-Type', 'application/json');

    }
    getToken() {
        return localStorage.getItem('token');
    }
    isLoggedIn() {
        let is_logged_in = false;
        if (localStorage.getItem('token') != null) {
            is_logged_in = true;
        }
        return is_logged_in;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.isLoggedIn())
            return true;
        this.router.navigate(['/unauthorize']);
    }
    login(credentials) {
        console.log(credentials)
        return this.http.post(this.link + 'auth/signin', JSON.stringify(credentials), { headers: this.headers })
            .map(res => res.json())
    }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/user'])
    }
} 