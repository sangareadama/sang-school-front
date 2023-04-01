import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credentials } from '../../../admin/Models/Credential';
import { Utilisateur } from '../../../admin/Models/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient,private router : Router) { }

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
    console.log("on a: "+ loginData.username+" "+loginData.password)
    return this.http.post<any>(`${this.apiServerUrl}/api/auth/authenticate`,loginData)
  }


  public Login(loginData:any):Observable<any>{
    console.log(loginData); 
    this.autoLogOut(200);
    return this.http.post<any>(`${this.apiServerUrl}/login`,loginData)
  }   
 
  //login user: set token in localStorage
  public loginUserInStorage(token: any){ 
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
    localStorage.removeItem('token');
    localStorage.removeItem('user')
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

  // get user
  public getUser(){
    
    let userStr=localStorage.getItem("user");
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
    
   
  }

  //get userRole
  public getUserRole(){ 
    let user = this.getUser();
    return user.roles[0].libelle;
  }
}
