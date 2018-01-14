import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers, Http } from '@angular/http';
import { authService } from './auth.service'

@Injectable()
export class userService {
    headers
    public link = 'http://localhost:3000/api/'
    constructor(private http: Http, private router: Router, private authService: authService) {
        this.headers = new Headers()
        this.headers.append('authorization', this.authService.getToken());
    }
    getuserlist() {
        return this.http.get(this.link + 'user/get/list', { headers: this.headers })
        .map(res => res.json())
    }
    deleteuser(id) {
        return this.http.delete(this.link + 'user/delete/' + id, { headers: this.headers })
        .map(res => res.json())
    }
    addUser(data) {
        return this.http.post(this.link + 'auth/signup', data, { headers: this.headers })
        .map(res => res.json())
    }
}
