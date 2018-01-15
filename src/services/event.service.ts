import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Headers, Http, Response } from '@angular/http';
import { authService } from './auth.service'
import 'rxjs/add/operator/map'
import { headersToString } from 'selenium-webdriver/http';
import { Header } from 'primeng/primeng';
@Injectable()
export class eventService {
    headers
    contactheaders
    public link = 'http://localhost:3000/api/'
    constructor(private http: Http, private router: Router, private authService: authService) {
        this.headers = new Headers()
        this.contactheaders = new Headers();
        this.contactheaders.append('Content-Type', 'application/json')
        this.headers.append('authorization', this.authService.getToken());
    }
    getEvents() {
        return this.http.get(this.link + 'event/get/list')
            .map(res => res.json())
    }
    getEvent(id) {
        return this.http.get(this.link + `event/getevent/${id}`)
            .map(res => res.json())
    }
    getQueries() {
        return this.http.get(this.link + `contact/getqueries`, { headers: this.headers })
            .map(res => res.json())
    }
    editEvent(id, data) {
        return this.http.post(this.link + `event/update/${id}`, data, { headers: this.headers })
            .map(res => res.json())
    }
    sendQuery(data) {
        console.log(data)
        return this.http.post(this.link + 'contact/submitquery', data, { headers: this.contactheaders })
            .map(res => res.json())
    }
    eventByDate() {
        return this.http.get(this.link + `event/listbydate`)
            .map(res => res.json())
    }
    addComment(id, comment) {
        return this.http.post(this.link + `event/addcomment/${id}`, JSON.stringify(comment), { headers: this.contactheaders })
            .map(res => res.json())
    }
}
