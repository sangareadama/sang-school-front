import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { UtilisateurServiceService } from '../utilisateur/utilisateur-service.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private utilisateurService:UtilisateurServiceService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token =this.utilisateurService.getToken();
    
    // S'il ya un token dans la requette
    if(token!==null){

      //get the jwt token from localstorage 
      let authReq=request;   
        let token =this.utilisateurService.getToken(); 
        alert("-------------->dans l'intercepteur")
        //console.log("avant :"+this.utilisateurService.getToken())        
        if(token!=null){ 
            authReq=authReq.clone({
                setHeaders:{Authorization: `Bearer ${token}`},
        });  
        }  

      // alert(this.jwtHelper.decodeToken(token|| '{}'));
        return next.handle(authReq)
        // .pipe(
        //   catchError(error=>{
        //     console.log(error)
        //     if(error.status===401){
        //        alert('session expirée')
        //     }
        //     return throwError("session expirée");
        //   })
        // )
    }
    return next.handle(request);
  }
}
