import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './component/body/body.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { CdkMenuModule } from '@angular/cdk/menu';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { OverlayModule } from 'primeng/overlay';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from '../admin/header/header.component';
import { MainAdminComponent } from './component/main-admin/main-admin.component';
import { SublevelMenuComponent } from './component/sidenav/sublevel-menu.component';



@NgModule({
  declarations: [
    SidenavComponent,
    BodyComponent, 
    SublevelMenuComponent, 
    HeaderComponent, 
    MainAdminComponent 
  ],
  imports: [
    CommonModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,   
    CdkMenuModule,
    CalendarModule,
    FormsModule,
    TableModule,
    HttpClientModule,  
  ],exports: [ 
    MainAdminComponent,
  ]
})
export class SharedModule { }
