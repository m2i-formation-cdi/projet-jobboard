import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private id:number = 0;

  private email:string;

  private token: string

  private role: string = 'anonymous'

  constructor(private http: HttpClient) { }


  public authenticate(credentials){
    return new Promise(
      (resolve, reject)=> {
        this.http.post(environment.API_URL + '/login', credentials)
        .subscribe(
          (response:any)=> {
            if(response.success){
              this.id = response.user.id;
              //this.token = response.token;
              this.email = response.user.email;
              this.role = response.user.role;
            }

            console.log(response);

            resolve(response);
          },
          (err) => {
            reject(err);
          }
        )
      }
    );
  }

  public isCandidat():boolean{
    return this.role == 'candidat';
  }

  public isEntreprise():boolean{
    return this.role == 'entreprise';
  }

  public isAuthenticated():boolean{
    return this.id > 0;
  }

  public getId():number{
    return this.id;
  }

  public getEmail(): string{
    return this.email;
  }

  public getToken(): string{
    return this.token;
  }

  public getRole(): string{
    return this.role;
  }

  public setId(id):UserService{
    this.id = id;
    return this;
  }

  public setEmail(email):UserService{
    this.email = email;
    return this;
  }

  public setToken(token):UserService{
    this.token = token;
    return this;
  }

  public setRole(role):UserService{
    this.role = role;
    return this;
  }

  public logout(){
    this.id = null;
    this.email = null;
    this.token = null;
    this.role = 'anonymous';
  }

}
