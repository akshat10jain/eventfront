import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { authService } from '../../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _routeParams: ActivatedRoute, public authService: authService, private _router: Router) { }

  ngOnInit() {
  }
  login(email, password) {
    var btn = <HTMLInputElement>document.getElementById('loginbutton');
    var i = document.createElement('i');
    i.className = "fa fa-refresh fa-spin";
    btn.appendChild(i);
    btn.disabled = true;
    var obj = {
      email: email,
      password: password
    }
    this.authService.login(obj).subscribe((resp) => {
      console.log(resp)
      btn.removeChild(i)
      btn.disabled = false;
      document.getElementById('modalclose').click()
      localStorage.setItem("token", resp['data'])
      this._router.navigate(['/admin']);
    })
  }
}
