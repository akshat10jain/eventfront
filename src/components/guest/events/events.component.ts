import { Component, OnInit } from '@angular/core';
import { eventService } from '../../../services/event.service'
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "SearchEvents"
})
export class searchEventsPipe implements PipeTransform {
  transform(event_array: any, query: string) {
    if (query == "") {
      return event_array;
    }
    return event_array.filter(function (response) {
      if (response.eventName.toLowerCase().startsWith(query)) {
        return true;
      }
    });
  }
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events
  public dateFirst; dateSecond; dateThird; dateFourth; dateFifth; dateSixth; dateSeventh
  public eventsByDate;
  public _searchquery = ''
  constructor(public eventService: eventService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((resp) => {

      this.events = resp['data']
      console.log(this.events)
    })
    this.eventService.eventByDate().subscribe((resp) => {
      this.eventsByDate = resp['data']
      this.dateFirst = resp['data'][0]
      this.dateSecond = resp['data'][1]
      this.dateThird = resp['data'][2]
      this.dateFourth = resp['data'][3]
      this.dateFifth = resp['data'][4]
    })
  }

}
