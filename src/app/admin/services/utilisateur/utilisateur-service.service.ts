import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../../Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

  public getUtilisateurs():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/demo-controller/liste`);
   // return this.http.get<any>(`${this.apiServerUrl}/api/auth/liste`);
  }
  public addUtilisateur(utilisateur:any):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/user/addUtilisateur`,utilisateur);
  }
  public updateUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/user/updateUtilisateur`,utilisateur);
  }  


  // Authenticate and generate token   
  public  Authentication(loginData:any):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/authenticate`,loginData)
  }

  //login user: set token in localStorage
  public loginUser(token: any){
    localStorage.setItem('token',token)
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }
}
