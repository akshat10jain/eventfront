import { Component, OnInit } from '@angular/core';
import { eventService} from '../../../services/event.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  data = {name:'',from:'',subject:'',description:''}
  constructor(public eventService: eventService) { }

  ngOnInit() {
  }
  submitquery(name, email, subject, description) {
    this.data.name = name.value
    this.data.from = email.value
    this.data.subject = subject.value
    this.data.description = description.value
    this.eventService.sendQuery(JSON.stringify(this.data)).subscribe((resp) => {
      console.log(resp)
    })
  }

}
