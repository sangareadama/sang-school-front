import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../Models/Utilisateur';
import { LoginService } from '../../services/login/login.service';
import { UtilisateurServiceService } from '../../services/utilisateur/utilisateur-service.service';
import {ConfirmationService, PrimeNGConfig,ConfirmEventType, MessageService} from 'primeng/api';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class UtilisateursComponent implements OnInit {
  birthday!:Date;

  ngOnInit(): void {
  //this.onGetUtilisateur(); 
     
  }

  constructor(private utilisateurServiceService:UtilisateurServiceService,private login: LoginService,
               private messageService:MessageService,private confirmationService:ConfirmationService ) { }
 
  public utilisateurs!: Utilisateur[];
  utilisateurForm!:FormGroup;
  message!:string;
  utilisateur:Utilisateur= new Utilisateur(0,"","","","",""); 
  utilisateurUpdate:Utilisateur = new Utilisateur(0,"","","","","")
 
  saveUtilisateur!: boolean; 
  updateUtilisateur!: boolean;  
  deleteUtilisateur!: boolean;
  submitted!:boolean;

  msgs: Message[] = [];
  position!: string;

 
  openUtilisateurdialog() {
    this.initFormUtilisateur(); 
    this.submitted = false;
    this.saveUtilisateur = true;
  }

  initFormUtilisateur() {  
    this.utilisateurForm = new FormGroup({
    id:new FormControl(null, Validators.required) ,
    nom:new FormControl(null, Validators.required) ,
    prenom:new FormControl(null, Validators.required) ,
    email:new FormControl(null, Validators.required) ,
    password:new FormControl(null, Validators.required) ,
    })  
  } 

  public onSaveUtilisateur(){ 
    this.submitted = true;       
    this.utilisateurServiceService.addUtilisateur(this.utilisateurForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.onGetUtilisateur();
        this.initFormUtilisateur();
      },
    }
    ) 
  }

  
  public onGetUtilisateur(){
    this.utilisateurServiceService.getUtilisateurs().subscribe({
      next: (response) => {
        this.utilisateurs=response;
      },
      // complete: () => {
      //   this.loading = false;
      // }
    });  
  } 

  onDeleteConfirmation(position: string,utilisateurToDelete:any) {
    this.position = position;
    this.confirmationService.confirm({
        message: 'Voulez vous supprimer ce element ?',
        header: 'Confirmation de suppression',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.onDeleteUtilisateur(utilisateurToDelete)
        },
        reject: (type: any) => { 
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'warn', summary:'Rejeté', detail:'Vous avez rejeté'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Annulé', detail:'Vous avez annulé'});
                break;
            }
        },
        key: "positionDialog"
    });
  }

  public onDeleteUtilisateur(utilisateurToDelete:any){
    this.utilisateurServiceService.deleteUtilisateur(utilisateurToDelete).subscribe(

      {
        next: (response) => {
          this.messageService.add({severity:'success', summary:'Confirmed', detail:'Operation effectuée avec succès !'});
        },
        // complete: () => {
        //   this.loading = false;
        // }
      }
    );
  } 

 public Authentication(logdata:any){
    this.login.Authentication(logdata).subscribe({
        next: (response) => {
          this.login.loginUserInStorage(response.token);
        },

      }
      
    )
        
  }

}
