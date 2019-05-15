import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public credentials = {
    date_annonce: null,
    description_annonce: null,
    salaire_min : null,
    salaire_max : null,
    date: null,

    status: 'annonce'
  }
  constructor(private user: UserService, private router:Router) { }

  ngOnInit() {
  }

  validForm(){
    this.user.authenticate(this.credentials)
      .then(
        ()=> this.router.navigateByUrl('/home') 
      )
      .catch(
        (err)=> console.log(err)
      )
  }

}


