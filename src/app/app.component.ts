import { Component, OnInit } from '@angular/core';


interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    
  }
  title = 'sang-school-front'; 

  constructor() { }

  isSideNavCollapsed=false;
  screenWidth=0;
  splitted!:string[];
  activePage!:any;


  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed

  }

  isConnexion(): boolean {
    this.splitted= window.location.href.split("/");
    return this.splitted[this.splitted.length-1]=="accueil";
  }
}


