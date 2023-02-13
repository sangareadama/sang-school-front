import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { RouterModule, Routes } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import { Prod11Component } from '../produits/prod11/prod11.component';
import { Prod21Component } from '../produits/prod21/prod21.component';
import { Prod3Component } from '../produits/prod3/prod3.component';

const routes: Routes = [

  {
    path:'liste',
    component: UtilisateursComponent,
  }, 
 
 
];  



@NgModule({
  declarations: [
    UtilisateursComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    TableModule,  
    
    RouterModule.forChild(routes),
  ]
})
export class UtilisateurModule { }
