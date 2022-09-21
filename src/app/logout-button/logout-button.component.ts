import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout({ 
      returnTo: this.document.location.origin 
    });
  }

}
