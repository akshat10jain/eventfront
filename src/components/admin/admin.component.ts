import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { authService } from '../../services/auth.service'
@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private authService: authService) {

  }
  ngOnInit() { }
  logout() {
    this.authService.logout()
  }
}
