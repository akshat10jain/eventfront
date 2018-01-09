import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers } from '@angular/http';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public quote;
  constructor(private http: HttpClient, private router: Router) {
    this.http.get('http://quotes.rest/qod.json').subscribe((resp) => {
      this.quote = resp['contents']['quotes'][0].quote
    })
  }

  ngOnInit() {
  }

}
