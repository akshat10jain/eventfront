import { Component, OnInit } from '@angular/core';
import { eventService } from '../../../services/event.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = []
  constructor(public eventService: eventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((resp) => {
      console.log(resp)
      this.events = resp['data']
    })
  }

}
