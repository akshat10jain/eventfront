import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers } from '@angular/http';
@Injectable()
export class mailService {
    headers
    public link = 'http://localhost:3000/api/contact/reply'
    constructor(private http: HttpClient, private router: Router) {
        this.headers = new Headers().set('Content-Type', 'multipart/form-data');
    }
    sendMail(data){
        return this.http.post(this.link,data)
    }

}
