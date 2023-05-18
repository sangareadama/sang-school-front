import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Utilisateur } from 'src/app/shared/models/Utilisateur';
import { LoginService } from 'src/app/shared/services/login/login.service';
import { NavigationService } from 'src/app/shared/services/navigation/navigation.service';
import { languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [MessageService]
})
export class HeaderComponent implements OnInit {
  @Input() collapsed=false;
  @Input() screenWidth=0;
  canShowSearchAsOverlay=false;
  selectedLanguage:any; 
  languages=languages;
  notifications=notifications;
  userItems=userItems;
  utilisateur : Utilisateur;

  nombreMessage!:any;

  // public utilisateurCourant!: Utilisateur;

  constructor( private router : Router , public loginService : LoginService,private navigation: NavigationService
    ,private messageService:MessageService ) { }

  ngOnInit(): void { 
     this.onGetUtilisateurConnecte()
    //alert(this.loginService.getUtilisateurConnecte().nom)
    
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage=this.languages[0]
    // this.ongetNombreMessage();
  }

  // public ongetNombreMessage(){
  //   this.contactServiceService.getNombreMessage().subscribe(
  //     (response:any)=>{
  //       this.nombreMessage=response; 
  //       console.log(this.nombreMessage) 
  //     },
  //     (error:HttpErrorResponse)=>{
  //         // alert(error.message);
  //     }
  //   );
  // } 

   public onGetUtilisateurConnecte(){
    this.utilisateur = this.loginService.getUtilisateurConnecte();
   }

  public OnDeconnection(){
    this.loginService.logout();
     if(!this.loginService.isLoggedIn()){
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
      this.navigation.goToConnexion();
    
     }else{
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
     }
     //this.router.navigate(['login'])
    // window.location.reload();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    

  } 

  getHeadClass():string{
    let styleClass='';
    if(this.collapsed && this.screenWidth>768){
      styleClass='head-trimed';
    }else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth>0){
      styleClass='head-md-screen'
    }

    return styleClass;

  }
  checkCanShowSearchAsOverlay(innerWidth:number):void{
    if(innerWidth<845){
      this.canShowSearchAsOverlay=true;
    }else{
      this.canShowSearchAsOverlay=false;
    }
  }

} 
