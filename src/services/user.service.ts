import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class userService {
    public link = 'http://localhost:3000/api/user/'
    constructor(private http: HttpClient, private router: Router) {
    }
    getuserlist() {
        return this.http.get(this.link + 'get/list');
    }
    deleteuser(id) {
        return this.http.delete(this.link + 'delete/' + id)
    }
}
