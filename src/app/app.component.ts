import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kardex';
  _auth: AuthService;
  toolbarVisible: boolean = false;
  constructor(private auth: AuthService){
     this._auth = this.auth;
  }

}
