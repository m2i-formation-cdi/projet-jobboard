import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private id:number = 0;

  private email:string;

  private token: string

  private role: string = 'anonymous'

  constructor() { }


  public authenticate(credentials){
    return new Promise(
      (resolve, reject)=> {
        
      }
    );
  }

  public isCandidat():boolean{
    return this.role == 'candidat';
  }

  public isEntreprise():boolean{
    return this.role == 'entreprise';
  }

  public isAuthenticated(){
    this.id > 0;
  }
}
