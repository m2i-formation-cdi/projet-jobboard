import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public credentials = {
    email: null,
    password: null,
    status: 'candidat'
  }

  constructor(
    private user: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  validForm() {
    this.user.authenticate(this.credentials)
      .then(
        (response: any) => {
          if (response.success) {
            this.router.navigateByUrl('/home');
          } else {
            console.log(response.error);
          }
        }
      )
      .catch(
        (err) => console.log(err)
      )
  }

}
