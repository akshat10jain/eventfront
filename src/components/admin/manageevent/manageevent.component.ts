import { Component, OnInit } from '@angular/core';
import { eventService } from '../../../services/event.service'
@Component({
  selector: 'app-manageevent',
  templateUrl: './manageevent.component.html',
  styleUrls: ['./manageevent.component.css']
})
export class ManageeventComponent implements OnInit {

  events
  constructor(public eventService: eventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((resp) => {
      this.events = resp['data']
      console.log(this.events)
    })
  }

}
