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
          (data:any)=> {
            this.id = data.user.id;
            this.token = data.token;
            this.email = data.user.email;
            this.role = data.user.role;
            resolve();
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
}
