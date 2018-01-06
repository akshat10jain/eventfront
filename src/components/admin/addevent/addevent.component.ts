import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { userService } from '../../../services/user.service';
import { FileUploader } from 'ng2-file-upload'
declare var bootbox: any
@Component({
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {
  public formData: FormData;
  public uploader: FileUploader = new FileUploader({ url: 'http://localhost:3000/api/event/add/event', itemAlias: 'eventImage' });
  ngOnInit() {

  }
  createEvent(data) {
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
  }
  onSuccessItem(item, response: string, status: number, headers): any {
    console.log("iam here")
    //this gets triggered only once when first file is uploaded
  }
}
