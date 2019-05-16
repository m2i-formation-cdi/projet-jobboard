import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.page.html',
  styleUrls: ['./liste-annonce.page.scss'],
})
export class ListeAnnoncePage implements OnInit {

  public listeAnnonce = [];
  
  public annonceFound = {
    
   id : "", 
   date_annonce : "",
   titre : "",
   description_annonce : "",
   id_entreprise : "",
   id_profession : "",
   id_type_contrat: "",
   salaire_min :"",
   salaire_max: ""

  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    let req = this.httpClient.get('http://localhost:3000/annonce/liste');
    req.subscribe((data: any) => {
      this.listeAnnonce = data.secteur;
      console.log(this.listeAnnonce)
    },
      err => console.log(err)
    );
  }

  }


