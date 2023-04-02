import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../../models/Utilisateur';

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
