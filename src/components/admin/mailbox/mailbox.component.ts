import { Component, OnInit } from '@angular/core';
import { mailService } from '../../../services/mail.service'
import { ActivatedRoute, Params } from '@angular/router';

declare var $: any
@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {
  public recipient
  public data
  constructor(public mailService: mailService, private _routeParams: ActivatedRoute) {
    this._routeParams.params.subscribe((params: Params) => {
      this.recipient = params['to'];
      this.data = params['subject']
    });
  }

  ngOnInit() {

  }
  sendMail(form) {
    console.log(form.value)
    this.mailService.sendMail(form.value).subscribe((resp) => {
       console.log(resp)
    })
  }
}
