import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Utilisateur } from '../../../shared/models/Utilisateur';
import { LoginService } from '../../../shared/services/login/login.service';
import { UtilisateurServiceService } from '../../../shared/services/utilisateur/utilisateur-service.service';
import {ConfirmationService, PrimeNGConfig,ConfirmEventType, MessageService, SelectItem} from 'primeng/api';
import {Message} from 'primeng/api';
import { TableauUtilisateur } from 'src/app/shared/models/TableauUtilisateur';
import {uniq} from 'lodash';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class UtilisateursComponent implements OnInit {

  constructor(private utilisateurServiceService:UtilisateurServiceService,private login: LoginService,private formBuilder: FormBuilder
    ,private messageService:MessageService,private confirmationService:ConfirmationService ) { }


  ngOnInit(): void {
    this.rolesSelect = [
      {
        label: 'Administrateur',
        value: 'ADMIN'
      },
      {
        label: 'Super administrateur',
        value: 'SUPER_ADMIN'
      },
      {
        label: 'Utilisateur',
        value: 'UTILISATEUR'
      }
    ];

    this.statutSelect = [
      {
        label: 'Actif',
        value: 'ACTIF'
      },
      {
        label: 'Inactif',
        value: 'INACTIF'
      }
    ];

    
    this.messageErreur = [];
    this.messageActif = false;
    this.initFormUtilisateur();

   // this.utilisateurConnecte = this.authService.getUtilisateurConnecte();
    //this.recupererDonneesUtilisateurs();
    this.onGetUtilisateur(); 
     
  }


 
  public utilisateurs!: Utilisateur[];
  utilisateurTableau: TableauUtilisateur;
  isLoading = false;
  utilisateurSelectonne: Utilisateur;
  ouvrirModaleSaisieUtilisateur!: boolean;
  submitted!: boolean;
  utilisateurForm!:FormGroup;

  messageActif = false;
  messageErreur: Message[] = [];


  rolesSelect: SelectItem[];
  statutSelect: SelectItem[];
  statuts: string[] = [];
  roles: string[] = [];
  readonlyEmailLogin = false;


  
  message!:string;
  //utilisateur:Utilisateur= new Utilisateur(0,"","","","",""); 
  //utilisateurUpdate:Utilisateur = new Utilisateur(0,"","","","","")
 
  saveUtilisateur!: boolean; 
  updateUtilisateur!: boolean;  
  deleteUtilisateur!: boolean;

  msgs: Message[] = [];
  position!: string;

  initFormUtilisateur() {  
    this.utilisateurForm = this.formBuilder.group({
      nom: [null , [Validators.required, Validators.maxLength(255)]],
      prenoms: [null, [Validators.required, Validators.maxLength(255)]],
      role: [this.rolesSelect[2].value, [Validators.required]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(255)]],
      statut: [this.statutSelect[0].value, [Validators.required]],
      username: [null, [Validators.required]]
    });
  } 

  fermerModale() {
    this.utilisateurForm.reset();
    this.messageActif = false;
    this.ouvrirModaleSaisieUtilisateur = false;
    this.isLoading = false;
  }

  public onSaveUtilisateur(){ 
    if (this.utilisateurForm.invalid) {
      this.messageErreur = [{detail: 'Veuillez saisir correctement tous les champs', severity: 'error'}];
      this.messageActif = true;
    } else {
      this.messageActif = false;
      this.isLoading = true;
      this.submitted = true; 
      this.utilisateurServiceService.addUtilisateur(this.utilisateurForm.value).subscribe({
        next: (value) => {
          this.onGetUtilisateur();
          this.fermerModale();
        },
        error: (error) => {
          if (error.error?.message) {
            this.messageErreur = error.error?.message;
            this.messageActif = true;
          }
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    }
  }
   
  public onGetUtilisateur():void{
    this.isLoading = true;
    this.utilisateurServiceService.getUtilisateurs().subscribe({
      next: (data) => {
        this.utilisateurTableau = data;
        this.roles = uniq(data.utilisateurs?.map(u => u.role)).sort();
        this.statuts = uniq(data.utilisateurs?.map(u => u.statut)).sort();

        console.log(this.utilisateurTableau)
      },
      complete: () => {
         this.isLoading = false;
      },
      error: (error) => {
        if (error.error?.message) {
          this.messageErreur = error.error?.message;
          this.messageActif = true;
        }
      }
    });  
  } 

  public openUtilisateurdialog() {
    this.ouvrirModaleSaisieUtilisateur = true;
    this.readonlyEmailLogin=false;
    this.messageActif = false;
  }

  modifier(utilisateur: Utilisateur) {
    this.utilisateurForm.setValue({
      nom: utilisateur.nom,
      prenoms: utilisateur.prenoms,
      role: this.rolesSelect.find(r => r.label === utilisateur.role).value,
      email: utilisateur.email,
      statut: this.statutSelect.find(s => s.label === utilisateur.statut).value,
      username: utilisateur.username
      
    });
    //this.readonlyEmailLogin=true;
    this.ouvrirModaleSaisieUtilisateur = true;
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

//  public Authentication(logdata:any){
//     this.login.Authentication(logdata).subscribe({
//         next: (response) => {
//           this.login.loginUserInStorage(response.token);
//         },

//       }
      
//     )
        
//   }

}
