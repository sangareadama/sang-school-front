import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utilisateur } from '../../Models/Utilisateur';
import { UtilisateurServiceService } from '../../services/utilisateur/utilisateur-service.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss']
})
export class UtilisateursComponent implements OnInit {
  birthday!:Date;

  ngOnInit(): void {
    //this.Authentication(this.loginData);
   this.onGetUtilisateur(); 
   
  }

  constructor(private utilisateurServiceService:UtilisateurServiceService) { }
 

  public utilisateurs!: Utilisateur[];
  utilisateurForm!:FormGroup;
  message!:string;
  utilisateur:Utilisateur= new Utilisateur(0,"","","",""); 
  loginData={
    email:"sang@",
    password:"123"   
  };

  public onGetUtilisateur(){
    this.utilisateurServiceService.getUtilisateurs().subscribe(
      (response)=>{
        this.utilisateurs=response;
        console.log(this.utilisateurs)
      }, 
      (error:HttpErrorResponse)=>{   
          alert(error.message);
      }
    );  
  } 

 public Authentication(logdata:any){
    this.utilisateurServiceService.Authentication(logdata).subscribe(
      (response)=>{  
        console.warn(response); 
        this.utilisateurServiceService.loginUser(response.token)
        alert("okk user set") 
          
      },
      (error)=>{ 
        console.warn(error);
      }
    )
        
  }

}
