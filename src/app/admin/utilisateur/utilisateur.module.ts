import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { RouterModule, Routes } from '@angular/router';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {ReactiveFormsModule } from '@angular/forms';

import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import {TreeSelectModule} from 'primeng/treeselect';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


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
    InputTextModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    ButtonModule,
    MultiSelectModule,
    ReactiveFormsModule,
    ToastModule,   
    DialogModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    MessagesModule,
    TreeSelectModule, 
    
    RouterModule.forChild(routes),
  ]
})
export class UtilisateurModule { }
