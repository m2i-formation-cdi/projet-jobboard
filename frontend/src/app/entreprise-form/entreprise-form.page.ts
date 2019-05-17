import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-entreprise-form',
  templateUrl: './entreprise-form.page.html',
  styleUrls: ['./entreprise-form.page.scss'],
})
export class EntrepriseFormPage implements OnInit {

  public secteurs = [];
  public entrepriseInput = {
    raison_sociale: "",
    mdp: "",
    email: "",
    adresse: "",
    code_postal: "",
    ville: "",
    telephone: "",
    siret: "",
    id_secteur: ""
  }

  public loginEntreprise = {
    id: "",
    token: "",
    email: "",
    role: "entreprise"
  };

  constructor(private httpClient: HttpClient, private router: Router, private user: UserService) { }

  ngOnInit() {
    let req = this.httpClient.get('http://localhost:3000/entreprise/secteur');
    req.subscribe((data: any) => {
      this.secteurs = data.secteur;
      console.log(this.secteurs)
    },
      err => console.log(err)
    );
  }

  
  sendFormInput() {

    let req = this.httpClient.post('http://localhost:3000/entreprise/new', this.entrepriseInput)
      .subscribe(
        (res: any) => {
          if (res.insert) {
            this.user.setRole("entreprise");
            this.user.setEmail(this.entrepriseInput.email);
            this.user.setId(res.insert.insertId);
            this.router.navigateByUrl('/home');
          } else {
            console.log(res.error);
          }

        }
      )
      console.log(this.user.getId);

  };


}
