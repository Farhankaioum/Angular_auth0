import { Component } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spendplan';

  constructor(public auth: AuthService) {}

  getTokens(){
    this.auth.getIdTokenClaims().subscribe(t => {
      console.log('getIdTokenClaims: ', t);
    });

    this.auth.getAccessTokenSilently().subscribe((token) => {
      console.log('userToken: ', token);
    });
  }
}
