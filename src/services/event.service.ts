import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Headers, Http, Response } from '@angular/http';
import { authService } from './auth.service'
import 'rxjs/add/operator/map'
@Injectable()
export class eventService {
    headers
    public link = 'http://localhost:3000/api/'
    constructor(private http: Http, private router: Router, private authService: authService) {
        this.headers = new Headers()
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
    eventByDate() {
        return this.http.get(this.link + `event/listbydate`)
            .map(res => res.json())
    }
    addComment(id,comment) {
        return this.http.post(this.link + `event/add/comment/${id}`,JSON.stringify(comment))
    }
}
