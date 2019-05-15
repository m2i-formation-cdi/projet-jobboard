import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

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
    console.log(this.entrepriseInput.id_secteur);
    let req = this.httpClient.post('http://localhost:3000/entreprise/new', this.entrepriseInput)
      .subscribe(
        (res: any) => {
          if (res.insert) {

          } else {
            console.log(res.error);
          }

        }
      )


  };


}
