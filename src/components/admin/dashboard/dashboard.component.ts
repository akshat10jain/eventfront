import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import { Headers } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { eventService } from '../../../services/event.service'
import { error } from 'selenium-webdriver';
import * as moment from 'moment'
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'formatdate'
})
export class Format implements PipeTransform {
  transform(value: string, args: string[]): any {
    return moment(value, "YYYYMMDD").fromNow();
  }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public quote;
  public queries
  constructor(private http: HttpClient, private router: Router, public eventService: eventService) {
    this.http.get('http://quotes.rest/qod.json').subscribe((resp) => {
      this.quote = resp['contents']['quotes'][0].quote
    })
  }

  ngOnInit() {
    this.eventService.getQueries().subscribe((resp) => {
      this.queries = resp['data']
      console.log(this.queries)
    })
  }


}
