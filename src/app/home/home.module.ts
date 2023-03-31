import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TreeSelectModule } from 'primeng/treeselect';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import {MatCardModule} from '@angular/material/card';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MessageModule } from 'primeng/message';


@NgModule({
  declarations: [
    AccueilComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    MultiSelectModule,
    ReactiveFormsModule,  
    DialogModule,
    ProgressBarModule,
    ToolbarModule,
    RatingModule,
    DropdownModule,  
    InputNumberModule,
    ConfirmDialogModule,
    MessagesModule,
    TreeSelectModule, 
    CardModule, 
    PasswordModule , 
  
    ProgressSpinnerModule,
    MessageModule

    
  ]
})
export class HomeModule { }
