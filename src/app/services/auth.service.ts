import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterUser } from '../models/register-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService,
    @Inject('apiUrl') private apiUrl) { }

  path = "https://localhost:44323/api/auth/";
  userToken: any;
  decodedToken: any;
  jwtHelper: JwtHelperService = new JwtHelperService();
  accessToken = "token";

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.httpClient
      .post(this.path + "login", loginUser, { headers: headers })
      .subscribe(data => {
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
        this.alertifyService.success("Sisteme giriş yapıldı.");
        this.router.navigateByUrl('/posts');
      });

  }

  register(registerUser: RegisterUser) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    this.httpClient
      .post(this.path + "register", registerUser, { headers: headers })
      .subscribe(data => {

      });
    this.alertifyService.success("Başarılı kullanıcı kaydı.");
    this.alertifyService.warning("Post eklemek için giriş yapınız!");
    this.router.navigateByUrl('');

  }
  saveToken(token) {
    localStorage.setItem(this.accessToken, JSON.stringify(token));

  }

  logOut() {
    localStorage.removeItem(this.accessToken);
    this.alertifyService.error("Sistemden çıkış yapıldı.");
  }

  loggedIn() {
    return localStorage.getItem(this.accessToken) !== null;
  }

  get token() {
    return localStorage.getItem(this.accessToken);
  }
  getCurrentUserId() {
    return this.jwtHelper.decodeToken(this.token).nameid;
  }



}
