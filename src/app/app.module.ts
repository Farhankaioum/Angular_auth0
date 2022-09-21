import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule, AuthService } from '@auth0/auth0-angular';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { NavBarComponentComponent } from './nav-bar.component/nav-bar.component.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './hero/hero.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './pages/profile/profile.component';
import { HttpClientModule } from '@angular/common/http';

import { JwtModule } from "@auth0/angular-jwt";

export function tokenGetter() {
  console.log('token: ', localStorage.getItem("access_token"));
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    UserProfileComponent,
    SignupButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponentComponent,
    MainNavComponent,
    NavBarComponent,
    FooterComponent,
    LoadingComponent,
    HomeComponent,
    HeroComponent,
    ExternalApiComponent,
    HomeContentComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-m0tnr9-s.us.auth0.com',
      clientId: 'gZPG5I7VUA4uRYH9xyuz6zjvE0YAsPn5',
      audience: 'https://localhost:44383/',
      redirectUri: window.location.origin
    }),
    NgbModule,
    FontAwesomeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44383"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(public auth: AuthService){}
}
