import { Component, OnInit } from '@angular/core';
import { userService } from '../../../services/user.service';
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from '@angular/material';
import * as $ from 'jquery'
declare var bootbox: any
export interface user {
  email;
  name;
  _id;
}
@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdata: user[]
  constructor(private http: HttpClient, public user: userService, public snackBar: MatSnackBar) { }
  ngOnInit() {
    this.user.getuserlist().subscribe((user) => {
      this.userdata = user['data']
      console.log(this.userdata)
    });

  }
  deleteuser(id, index) {
    bootbox.confirm("Are you sure you want to save!", (resp) => {
      if (resp) {
        (<HTMLInputElement>document.getElementById("deleteuser")).style.backgroundColor = 'tomato'
        this.user.deleteuser(id).subscribe((resp) => {
          if (resp['error'] == false) {
            this.userdata.splice(index, 1)
          }
        })
      }
    })
  }
  modal_data(name, email) {
    (<HTMLInputElement>document.getElementById("name")).value = name;
    (<HTMLInputElement>document.getElementById("email")).value = email;
  }
  addUser(form) {
    this.user.addUser(form.value).subscribe((resp) => {
      if (resp['error'] == false) {
        document.getElementById('userclose').click()
        this.snackBar.open("New user added successfully", 'Close', {
          duration: 2000,
          horizontalPosition: "right",
          verticalPosition: "bottom"
        });
        form.resetForm();
      } else {
        console.log(resp)
        this.snackBar.open(resp['errors'][0].msg, 'Close', {
          duration: 2000,
          horizontalPosition: "right",
          verticalPosition: "bottom"
        })
      }
    })
  }
}
