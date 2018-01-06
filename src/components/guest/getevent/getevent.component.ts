import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-getevent',
  templateUrl: './getevent.component.html',
  styleUrls: ['./getevent.component.css']
})
export class GeteventComponent implements OnInit {
  eventId
  constructor(private _routeParams: ActivatedRoute) {
    var queryParam = this._routeParams.params.subscribe((params: Params) => {
      this.eventId = params['id'];
    });
  }
  ngOnInit() {
  }

}
