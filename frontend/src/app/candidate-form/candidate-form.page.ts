import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.page.html',
  styleUrls: ['./candidate-form.page.scss'],
})
export class CandidateFormPage implements OnInit {

  public modelCandidate = {
    nom: '',
    prenom: '',
    mdp: '',
    email: '',
    adresse: '',
    code_poistal: '',
    ville: '',
    telephone: '',
    titre: ''
  };


  constructor(private httpClient: HttpClient,
    private router: Router,
    private toaster: ToastController) { }

  ngOnInit() {
  }





  insertCandidate() {
    this.httpClient.post("http://localhost:3000/candidat/new", this.modelCandidate)
      .subscribe(
        () => {
          console.log(this.modelCandidate);
          this.router.navigateByUrl('/home');

        },
        (err) => console.log(err)

      )
  }

}
