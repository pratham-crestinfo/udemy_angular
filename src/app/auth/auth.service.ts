import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { ExpressionStatement } from '@angular/compiler';
import { Subject, tap } from 'rxjs';
interface AuthresponseData {
  local_id: string;
  expires_in: string;
  token_type: string;
  refresh_token: string;
  id_token: string;
  user_id: string;
  project_id: string;
}
@Injectable()
export class AuthService {
  user = new Subject<User>();
  constructor(private http: HttpClient) {}
  signUp(email: string, passcode: string) {
    return this.http
      .post<AuthresponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBRfqhpWa8AS0CPi9vir8zXXuXaDAi0YBs',
        { email: email, password: passcode, returnSecureToken: true }
      )
      .pipe(
        tap((resData) => {
          const expirationDate = new Date(
            new Date().getTime() + +resData.expires_in * 1000
          );
          const user = new User(
            resData.user_id,
            resData.local_id,
            resData.id_token,
            expirationDate
          );
          this.user.next(user);
        })
      );
  }
  SignIn(email: string, passcode: string) {
    return this.http.post<AuthresponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBRfqhpWa8AS0CPi9vir8zXXuXaDAi0YBs',
      {
        email: email,
        password: passcode,
        returnSecureToken: true,
      }
    );
  }
}
