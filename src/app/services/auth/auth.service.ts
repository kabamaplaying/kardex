import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { httpOptions } from './../../libs/const/http-config';
import { URL_API } from './../../../environments/url-api';
import * as Model from 'src/app/libs/models';
import { BehaviorSubject } from 'rxjs';
import { TokenStorageService } from './token-storage-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<Model.UsuarioCreateRespuestaDto>(null) ;
  public currentUser = this.currentUserSubject.asObservable();
  constructor(private readonly http: HttpClient, private readonly tokenStorage: TokenStorageService) { }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
}

  login(credentials: Model.LoginRequest){
     return this.http.post<any>(`${URL_API.base}/auth/login`, credentials, httpOptions).pipe(
      map(user => {
        if(user.token) {
        this.tokenStorage.saveToken(user.token);
        this.tokenStorage.saveCurrentUser(user);
        this.currentUserSubject.next(user);}
        return user;
      }));

  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('AuthToken');
    this.currentUserSubject.next(null);
}
}
