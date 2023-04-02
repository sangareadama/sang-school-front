import { Component, OnInit } from '@angular/core';
import {ConfirmationService, PrimeNGConfig,ConfirmEventType, MessageService} from 'primeng/api';
import { LoginService } from 'src/app/shared/services/login/login.service';
import {Message} from 'primeng/api';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Credentials } from 'src/app/shared/models/Credential';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ConfirmationService,MessageService]
})
export class LoginComponent implements OnInit  {

  constructor(private login: LoginService,private router:Router,private formBuilder: FormBuilder,
    private messageService:MessageService,private confirmationService:ConfirmationService){

  } 
  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group({
		email: ['', [Validators.required, Validators.maxLength(255)]],
			password: ['', [Validators.required, Validators.maxLength(255)]]
		});

  }
  hide = true;

  password:string

  loginForm: FormGroup;
	messageActif = false;
	messageErreur!: string;
	isLoading = false;

  connexion(): void {

			const utilisateur: Credentials = new Credentials(
				this.loginForm.get('email').value,
				this.loginForm.get('password')?.value
			);
			this.isLoading = true;
			this.messageActif = false;
			this.login.Authentication(utilisateur).subscribe({
				next: (value:any) => {
					localStorage.clear(); 
					const jwtToken = value.token;
       				this.login.loginTokenInStorage(jwtToken);
					this.router.navigate(['admin'])
         			console.log(value)
					
				}, 
				error: (err:any) => {
					if (err.status === 403) {
						this.messageErreur = 'Nom d\'utilisateur ou mot de passe incorrect';
					} else {
						this.messageErreur = 'Serveur indisponible';
					}
					this.messageActif = true;
					this.isLoading = false;
				}
			});
	}



  

}
