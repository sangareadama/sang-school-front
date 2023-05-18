import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../../models/Credential';
import { urls } from '../../models/urls';
import { Utilisateur } from '../../models/Utilisateur';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl=environment.apiBaseUrl;

 
  constructor(private http:HttpClient,private router : Router,private jwtHelper: JwtHelperService) { }

  //current user 
  public getCurrentUser():Observable<any>{ 
    let UserToken=this.getToken();
    //  let Head_object= new HttpHeaders().set("Authorization","Bearer "+UserToken)
    //  alert('voila '+Head_object.get("Authorization"))
    // return this.http.get(`${this.apiServerUrl}/api/current_user`,{headers:Head_object})
    return this.http.get<any>(`${this.apiServerUrl}/api/current_user`)
  } 
  

  // Authenticate and generate token   
  public  Authentication(loginData:Credentials):Observable<any>{
     this.logout();
    return this.http.post<any>(`${this.apiServerUrl}`+urls.auth,loginData)
  }


  public Login(loginData:any):Observable<any>{
    console.log(loginData); 
    this.autoLogOut(200);
    return this.http.post<any>(`${this.apiServerUrl}/login`,loginData)
  }   
 
  //login user: set token in localStorage
  public loginTokenInStorage(token: any){ 
    localStorage.setItem('token',token)
    return true;
  }
    
  //islogin user is logged or not  
  public isLoggedIn(){
    let tokenStr=localStorage.getItem("token")
    if(tokenStr==undefined || tokenStr=='' || tokenStr==null){
      return false;   
    }else{  
      return true;
    }

  }

  //auto log aout if time expired
  public autoLogOut(expirationDate:number){
    setTimeout(()=>{
      this.logout()
      
      this.router.navigate(['login'])
    },expirationDate )
  }

  //logout : remove token from local storage
  public logout(){
    localStorage.clear();
    return true;
  }

  //get token
  public getToken(){
    return localStorage.getItem('token');
  }

  // set userDetail 
  public setUser(user:Utilisateur){
      localStorage.setItem('user', JSON.stringify(user));
  }

  getUtilisateurConnecte(): Utilisateur {
    if (this.isLoggedIn()) {
      const token = this.jwtHelper.decodeToken(this.getToken());
      console.log(this.getToken())
      const utilisateur = new Utilisateur();
      utilisateur.nom = token.nom;
      utilisateur.prenoms = token.prenoms; 
      utilisateur.username = token.username;
      utilisateur.profil = token.role;
      utilisateur.email = token.email;
      utilisateur.statut = token.statut;
      return utilisateur;
    }
    return null;
  }


  // // get user
  // public getUser(){
    
  //   let userStr=localStorage.getItem("user");
  //   if(userStr!=null){
  //     return JSON.parse(userStr);
  //   }else{
  //     this.logout();
  //     return null;
  //   }
    
   
  // }


  //get userRole
  // public getUserRole(){ 
  //   let user = this.getUser();
  //   return user.roles[0].libelle;
  // }
}
