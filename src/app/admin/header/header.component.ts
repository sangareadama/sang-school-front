import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { languages, notifications, userItems } from './header-dummy-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed=false;
  @Input() screenWidth=0;
  canShowSearchAsOverlay=false;
  selectedLanguage:any; 
  languages=languages;
  notifications=notifications;
  userItems=userItems;

  nombreMessage!:any;

  // public utilisateurCourant!: Utilisateur;

  constructor( private router : Router ) { }

  valeur="okkkk";

  ngOnInit(): void { 
    // this.onGetUser()
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

  // public onGetUser(){
  //  this.utilisateurCourant= this.login.getUser();
  // }

  // public logout(){
  //   this.login.logout();
  //    if(!this.login.isLoggedIn()){
  //      this.toast.info({detail:"Loged out Message",summary:"vous etes déconnecté avec succès !",duration:4000})
  //    }else{
  //     this.toast.error({detail:"Error Message",summary:'Une erreure à survenue: ',duration:4000})
  //    }
  //    this.router.navigate(['login'])
  //   // window.location.reload();
  // }

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
