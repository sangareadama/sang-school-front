import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PagesComponent } from './admin/pages/pages.component';
import { ProductsComponent } from './admin/products/products.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { AccueilComponent } from './home/accueil/accueil.component';
import { LoginComponent } from './home/login/login.component';
import { MainAdminComponent } from './share/component/main-admin/main-admin.component';

const routes: Routes = [
  {path: '',  redirectTo : '/accueil',
  pathMatch : 'full'},
  {path:"accueil",component:AccueilComponent},
  {path:'admin',
    component:MainAdminComponent,
    data: {
      title: 'Dashboard',
      breadcrumb: [
        {
          label: 'Dashboard',
          url: ''
        } 
      ]
    },
    pathMatch:'full',   
  },
  {path:"login",component:LoginComponent},
  {path:"utilisateur",component:ProductsComponent},
  {path:"statistics",component:StatisticsComponent},
  {path:"pages",component:PagesComponent},
];

@NgModule({  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
