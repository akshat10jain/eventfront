import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers, Http } from '@angular/http';
import { authService } from './auth.service'
import 'rxjs/add/operator/map'
@Injectable()
export class mailService {
    headers
    public link = 'http://localhost:3000/api/contact/reply'
    constructor(private http: Http, private router: Router, private authService: authService) {
        this.headers = new Headers()
        this.headers.append('authorization', this.authService.getToken());
    }
    sendMail(data) {
        return this.http.post(this.link, data, { headers: this.headers })
    }

}
