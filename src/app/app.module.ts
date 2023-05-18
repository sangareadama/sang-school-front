import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from "./admin/admin.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { HomeModule } from './home/home.module';
import { JwtInterceptor } from './shared/Interceptors/jwt.interceptor';
import { SharedModule } from './shared/shared.module';
import { ToastModule } from 'primeng/toast';
export function tokenGetter(): string {
	const token = localStorage.getItem('token');
	return token ? token : '';
}



@NgModule({
    declarations: [   
        AppComponent
    ],
    providers: [JwtHelperService,{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, 
        AdminModule,
        CommonModule,  
        SharedModule,
        BrowserAnimationsModule,
        CardModule,
        ToastModule,
        ButtonModule,
        JwtModule.forRoot({
			config: {tokenGetter: tokenGetter}
		}),

        
    ]
})
export class AppModule { }
