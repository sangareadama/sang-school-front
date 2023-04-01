import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../../../admin/Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }

 // static token for ....
 auth_token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW5nQCIsImlhdCI6MTY3NjczNzY1MywiZXhwIjoxNjc2NzM5MDkzfQ.KWqS5_qQpstFIt62Pep_8CdRD8CqTIC2qZXwCCmHC1U";
  
 headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });
  
 requestOptions = { headers: this.headers };


  public getUtilisateurs():Observable<any[]>{
    return this.http.get<any>(`${this.apiServerUrl}/api/demo-controller/liste`);
   // return this.http.get<any>(`${this.apiServerUrl}/api/auth/liste`);
  }    
  public addUtilisateur(utilisateur:any):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/auth/register`,utilisateur);
  }
  public updateUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}/api/user/updateUtilisateur`,utilisateur);
  } 
  public deleteUtilisateur(utilisateur:any):Observable<any>{
    console.log(utilisateur)
    return this.http.post<any>(`${this.apiServerUrl}/api/demo-controller/supprimer`,utilisateur);
  }  


  


  
}    
