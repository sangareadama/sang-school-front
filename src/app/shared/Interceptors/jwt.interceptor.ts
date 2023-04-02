import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private login: LoginService) {} 

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token =this.login.getToken();
    
    // S'il ya un token dans la requette
    if(token!==null){
  
      //get the jwt token from localstorage 
      let authReq=request;       
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
