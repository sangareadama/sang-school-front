import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { compileInjectable, createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { UtilisateurServiceService } from "../utilisateur/utilisateur-service.service";
@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private utilisateurService:UtilisateurServiceService){

    }  
    token =this.utilisateurService.getToken();

    intercept(req: HttpRequest<any>, next: HttpHandler):
     Observable<HttpEvent<any>> {
       
    //add the jwt token from localstorage 
        let authReq=req;   
        let token =this.utilisateurService.getToken(); 
        alert("-------------->dans l'intercepteur")
        console.log("avant :"+this.utilisateurService.getToken())        
        if(token!=null){
            authReq=authReq.clone({
                setHeaders:{Authorization: `Bearer ${token}`},
        });  
        }    
      // alert(this.jwtHelper.decodeToken(token|| '{}'));
        return next.handle(authReq)
        // .pipe(
        //     catchError((err:HttpInterceptor)=>{

        //         console.log(err)
        //         return throwError("err")
        //     })  
        // )
        ;   
        // let  headerToken=req.clone({ 
        //     setHeaders:{Authorization: "Bearer "+this.token}
        // }); 
  
        // return next.handle(headerToken);

 
    }

}

// export const authInterceptorProvider=[
//     {
//         provide:HTTP_INTERCEPTORS,
//         useClass:AuthInterceptor,
//         multi:true,
//     },
// ];