import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prod11Component } from './prod11/prod11.component';
import { Prod21Component } from './prod21/prod21.component';
import { Prod3Component } from './prod3/prod3.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'level1_1',
    component: Prod11Component,
  }, 
  { 
    path:'level1_2', 
    component: Prod21Component, 
  },
  { 
    path:'Level3', 
    component: Prod3Component, 
  },
 
 
];  

@NgModule({
  declarations: [
    Prod11Component,
    Prod21Component,
    Prod3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
  ]
})
export class ProduitsModule { }
