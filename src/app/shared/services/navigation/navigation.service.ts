import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  
  constructor(private router: Router) {
	}

	public async goTo(route: string): Promise<void> {
		await this.router.navigate([route]);
	}  

  // isResultat(): boolean {
	// 	return this.router.url.includes('/resultat/');
	// }

	goToAdmin(): void {  
		this.goTo('admin');
	}

	// goToConnexion(): void {
	// 	this.goTo('connexion');
	// }


}
