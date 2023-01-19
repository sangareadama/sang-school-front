import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CoupensComponent } from './coupens/coupens.component';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {CdkMenuModule} from '@angular/cdk/menu';
const adminRouter = [
  {path: 'admin', component: MainAdminComponent, 
    
    children:[
      {path: 'dashboard', component: DashboardComponent},
      {path: 'statistics', component: StatisticsComponent},
      
      
      {
        path: 'products',    
        loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule)
      },   
      // {  
      //   path: 'coupens',    
      //   loadChildren: () => import('./coupens/coupens-routing.module').then(m => m.CoupensRoutingModule)
      // },  
      // {path: 'media',  
      //   loadChildren: () => import('./pages-admin/pages-admin.module').then(m => m.PagesAdminModule)
      // },
      // {path: 'pages',
      // loadChildren: () => import('./pages-admin/pages-admin.module').then(m => m.PagesAdminModule)
      // },
      // {path: 'settings', component: SettingsComponent}

    ]},  
]


@NgModule({
  declarations: [
    SidenavComponent,
    BodyComponent,   
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupensComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,  
    MainAdminComponent,
    
     
    SublevelMenuComponent, HeaderComponent, 
   
  ],
  imports: [  
    CommonModule,  
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OverlayModule,
    CdkMenuModule,
    RouterModule.forRoot(adminRouter),
  ],
  exports:[
   
    MainAdminComponent,
    DashboardComponent,
  
  ], 
})
export class AdminModule { }
