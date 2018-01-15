import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { userService } from '../../../services/user.service';
import { FileUploader } from 'ng2-file-upload'
declare var bootbox: any
import { ActivatedRoute, Params } from '@angular/router';
import { eventService } from '../../../services/event.service';
import * as $ from 'jquery'
@Component({
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  public eventId = null;
  public eventData = {};
  public formData: FormData;
  public uploader: FileUploader = new FileUploader({
    url: 'http://localhost:3000/api/event/add/event',
    itemAlias: 'eventImage',
    headers: [{ name: 'authorization', value: localStorage.getItem('token') }]
  });
  constructor(private _routeParams: ActivatedRoute, private eventService: eventService) {
    var queryParam = this._routeParams.params.subscribe((params: Params) => {
      this.eventId = params['eventId'];
      console.log(this.eventId)
    });
  }
  ngOnInit() {
    if (this.eventId != null) {
      this.eventService.getEvent(this.eventId).subscribe((resp) => {
        if (!resp['error']) {
          this.eventData = resp['data']
          console.log(this.eventData)
        }
      })
    }
  }
  createEvent(data) {
    if (!this.eventId) {
      console.log(data)
      bootbox.confirm("Are you sure you want to save!", (resp) => {
        if (resp) {
          this.uploader.onBuildItemForm = (item, form) => {
            form.append("eventName", data.value.eventName);
            form.append("date", data.value.date);
            form.append("time", data.value.time);
            form.append("description", data.value.description);
            form.append("contact", data.value.contact);
            form.append("tags", data.value.tags)
            form.append("location", data.value.location)
            form.append("publishedBy", data.value.publishedBy)
            item.withCredentials = false;
          };

          this.uploader.uploadAll()
          this.uploader.onSuccessItem = (item, response: string, status: number) => {
            if (response && response['error'] == false) {
              console.log("Event has been successfully added")
              location.reload();
            }
          }

        }
      })
    } else {
      console.log("called")
      var form = new FormData()
      form.append("eventName", data.value.eventName);
      form.append("date", data.value.date);
      form.append("time", data.value.time);
      form.append("description", data.value.description);
      form.append("contact", data.value.contact);
      form.append("tags", data.value.tags)
      form.append("location", data.value.location)
      form.append("publishedBy", data.value.publishedBy)
      this.eventService.editEvent(this.eventId, form).subscribe((resp) => {
        console.log(resp)
      })
    }
  }
  onSuccessItem(item, response: string, status: number, headers): any {
    console.log("iam here")
    //this gets triggered only once when first file is uploaded
  }

}
