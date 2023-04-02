import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from "./admin/admin.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeModule } from './home/home.module';
import { JwtInterceptor } from './shared/Interceptors/jwt.interceptor';


@NgModule({
    declarations: [   
        AppComponent
    ],
    providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, 
        AdminModule,
        CommonModule, 
        BrowserAnimationsModule ,
        CardModule,
        ButtonModule,
        
    ]
})
export class AppModule { }
