import { Component, OnInit } from '@angular/core';
import {ConfirmationService, PrimeNGConfig,ConfirmEventType, MessageService} from 'primeng/api';
import { LoginService } from 'src/app/admin/services/login/login.service';
import {Message} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class LoginComponent implements OnInit  {

  constructor(private login: LoginService,
    private messageService:MessageService,private confirmationService:ConfirmationService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  isLoading = false;
  hide = true;

  password:string
  

}
