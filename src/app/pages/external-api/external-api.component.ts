import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment as env } from '../../../environments/environment';
import { AuthService } from '@auth0/auth0-angular';

interface Message {
  message: string;
}

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styleUrls: ['./external-api.component.css']
})
export class ExternalApiComponent implements OnInit {

  message: string | undefined;
  mainUrl = "https://localhost:44383/";

  constructor(private http: HttpClient, public auth: AuthService) {}

  ngOnInit(): void {}

  callApi(): void {
    this.http
      .get<Message>(`/api/messages/public-message`)
      .subscribe((result: Message) => {
        this.message = result.message;
      });
  }

  callSecureApi(): void {
    this.http
      .get<Message>(`/api/messages/protected-message`)
      .subscribe((result: Message) => {
        this.message = result.message;
      });
  }

  async getContractTypes(){
    console.log('token: ', await this.getToken());

    var auth_token = '';
    this.auth.getAccessTokenSilently().subscribe((token) => {
      auth_token = token;

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
  
    const requestOptions = { headers: headers }
  
      this.http
        .get(`${this.mainUrl}api/ContractTypes/`, requestOptions)
        .subscribe((result: any) => {
          console.log(result);
        });
    });
  }

  async getManagementApiToken(){
    var auth_token = '';
    this.auth.getAccessTokenSilently().subscribe((token) => {
      auth_token = token;

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
  
    const requestOptions = { headers: headers }
  
      this.http
        .get(`${this.mainUrl}api/Dashboard/GetManagementToken/`, requestOptions)
        .subscribe((result: any) => {
          this.message = result.access_token;
          console.log(result);
        });
    });
  }

  async getUser(){
    var auth_token = '';
    this.auth.getAccessTokenSilently().subscribe((token) => {
      auth_token = token;

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${auth_token}`
      });
  
    const requestOptions = { headers: headers }
  
      this.http
        .get(`${this.mainUrl}api/Dashboard/UserById/`, requestOptions)
        .subscribe((result: any) => {
          console.log(result);
        });
    });
  }

async getToken(){
  var auth_token = '';
  
  this.auth.getAccessTokenSilently().subscribe((token) => {
    auth_token = token;
  });

  return auth_token;
}

}
