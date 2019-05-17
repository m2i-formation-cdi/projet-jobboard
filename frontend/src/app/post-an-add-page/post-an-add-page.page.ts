import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-an-add-page',
  templateUrl: './post-an-add-page.page.html',
  styleUrls: ['./post-an-add-page.page.scss'],
})
export class PostAnAddPagePage implements OnInit {
  public salaireInput;
  public professionsListe = [];
  public typeContratListe = [];
  public insertAnnonce = {
    date_annonce: "",
    titre: "",
    description_annonce: "",
    id_entreprise: null,
    id_profession: "",
    id_type_contrat: "",
    salaire_min: "",
    salaire_max: ""
  };

  constructor(private httpClient: HttpClient, private user: UserService, private router: Router) { }

  ngOnInit() {
    //Récupération des professions
    let reqProfession = this.httpClient.get('http://localhost:3000/annonce/profession');
    reqProfession.subscribe((data: any) => {
      this.professionsListe = data.data;

    },
      err => console.log(err)
    );
    //Récupération des types de contrats
    let reqTypeContrat = this.httpClient.get('http://localhost:3000/annonce/typeContrat');
    reqTypeContrat.subscribe((data: any) => {
      this.typeContratListe = data.data;

    },
      err => console.log(err)
    );
    console.log(this.user);
  }

  sendFormInput() {

    let dateAnnoncePost = (new Date()).toISOString().slice(0, 10);
    this.insertAnnonce.date_annonce = dateAnnoncePost;
    this.insertAnnonce.salaire_min = this.salaireInput.lower;
    this.insertAnnonce.salaire_max = this.salaireInput.upper;
    this.insertAnnonce.id_entreprise = this.user.getId().toString();
    console.log(this.insertAnnonce);

    let req = this.httpClient.post('http://localhost:3000/annonce/new', this.insertAnnonce)
      .subscribe(
        (res: any) => {
          if (res.insert) {

            this.router.navigateByUrl('/home');
          } else {
            console.log(res.error);
          }

        }
      )


  }




}
