import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { eventService } from '../../../services/event.service'
@Component({
  selector: 'app-getevent',
  templateUrl: './getevent.component.html',
  styleUrls: ['./getevent.component.css']
})
export class GeteventComponent implements OnInit {
  public eventId
  public events
  constructor(private _routeParams: ActivatedRoute, private eventService: eventService) {
    var queryParam = this._routeParams.params.subscribe((params: Params) => {
      this.eventId = params['eventId'];
    });
  }
  ngOnInit() {
    this.eventService.getEvent(this.eventId).subscribe((resp) => {
      this.events = resp['data']
    })
  }

}
