import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TableauUtilisateur } from '../../models/TableauUtilisateur';
import { urls } from '../../models/urls';
import { Utilisateur } from '../../models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  

  private apiServerUrl=environment.apiBaseUrl;
  
  constructor(private http: HttpClient) { }


 

  public getUtilisateurs():Observable<TableauUtilisateur>{
    return this.http.get<TableauUtilisateur>(`${this.apiServerUrl}`+urls.listeUtilisateur);

   // return this.http.get<any>(`${this.apiServerUrl}/api/auth/liste`);
  }      
  public addUtilisateur(utilisateur:any):Observable<Utilisateur>{
    console.log(utilisateur)
    return this.http.post<Utilisateur>(`${this.apiServerUrl}`+urls.enregistrerUtilisateur,utilisateur);
  }
  public updateUtilisateur(utilisateur:Utilisateur):Observable<Utilisateur>{
    return this.http.post<Utilisateur>(`${this.apiServerUrl}`+urls.modifierUtilisateur,utilisateur);
  } 
  public deleteUtilisateur(utilisateur:TableauUtilisateur):Observable<TableauUtilisateur>{
    return this.http.post<TableauUtilisateur>(`${this.apiServerUrl}`+urls.supprimerUtilisateur,utilisateur);
  }  


  


  
}    
