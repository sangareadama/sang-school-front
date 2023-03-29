import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from 'primeng/overlay';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { SublevelMenuComponent } from './component/sidenav/sublevel-menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { MainAdminComponent } from './component/main-admin/main-admin.component';
import { BodyComponent } from './component/body/body.component';



@NgModule({
  declarations: [
    SidenavComponent,
    SublevelMenuComponent, 
    HeaderComponent, 
    MainAdminComponent,
    BodyComponent,
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
  ] ,
  exports:[
   
    SidenavComponent,
    SublevelMenuComponent, 
    HeaderComponent, 
    
  
  ], 
})
export class ShareModule { }
