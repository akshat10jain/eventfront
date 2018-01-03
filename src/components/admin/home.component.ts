import { Component, OnInit } from '@angular/core';
import { userService } from '../../services/user.service';
import { HttpClient } from "@angular/common/http";
export interface user {
  email;
  name;
  _id;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userdata: user[]
  constructor(private http: HttpClient, public user: userService) { }
  ngOnInit() {
    this.user.getuserlist().subscribe((user) => {
      this.userdata = user['data']
      console.log(this.userdata)
    });

  }
  deleteuser(id, index) {
    (<HTMLInputElement>document.getElementById("deleteuser")).style.backgroundColor = 'tomato'
    this.user.deleteuser(id).subscribe((resp) => {
      if (resp['error'] == false) {
        this.userdata.splice(index, 1)
      }
    })
  }
  modal_data(name, email) {
    (<HTMLInputElement>document.getElementById("name")).value = name;
    (<HTMLInputElement>document.getElementById("email")).value = email;
  }

}
