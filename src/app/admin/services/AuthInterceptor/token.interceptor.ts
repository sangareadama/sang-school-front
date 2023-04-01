import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UtilisateurServiceService } from '../../../shared/services/utilisateur/utilisateur-service.service';
import { LoginService } from '../../../shared/services/login/login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private utilisateurService:UtilisateurServiceService,private login: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token =this.login.getToken();
    
    // S'il ya un token dans la requette
    if(token!==null){
  
      //get the jwt token from localstorage 
      let authReq=request; 
        console.log("avant :"+this.login.getToken())        
        if(token!=null){ 
            authReq=authReq.clone({
                setHeaders:{Authorization: `Bearer ${token}`},
        });   
        
        return next.handle(authReq)
        .pipe(
          catchError(error=>{
            console.log(error)
            if(error.status===403){
               this.login.logout();
               alert('session expirée')
            }
            return throwError("session expirée");
          })  
        )
        }  

      // alert(this.jwtHelper.decodeToken(token|| '{}'));
        
    }
    return next.handle(request);
  }
}
