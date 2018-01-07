import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers } from '@angular/http';
@Injectable()
export class eventService {
    headers
    public link = 'http://localhost:3000/api/'
    constructor(private http: HttpClient, private router: Router) {
        this.headers = new Headers().set('Content-Type', 'multipart/form-data');
    }
    getEvents(){
        return this.http.get(this.link+'event/get/list')
    }
    getEvent(id){
        return this.http.get(this.link+`event/getevent/${id}`)
    }
}
