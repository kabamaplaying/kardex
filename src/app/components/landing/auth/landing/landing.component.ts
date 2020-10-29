import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from './../../../../services/auth/auth.service';
import * as Model from './../../../../libs/models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private redirectUrl = '';
  mensajeErrorAutenticacion = '';

  constructor(private auth: AuthService, private readonly router: Router, private route: ActivatedRoute){

        if(this.auth.currentUserValue){
      this.router.navigate(['/']);


  }
}


  ngOnInit(): void {


  }

  login(loginRequest: Model.LoginRequest){
    this.auth.login(loginRequest).pipe(first()).subscribe(user => {
      if(this.auth.currentUserValue){
        this.redirectUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
        this.router.navigate([this.redirectUrl]);
      }else {
        this.mensajeErrorAutenticacion = user.message;
      }
    }, error => {
     this.mensajeErrorAutenticacion = error.message;
     alert(this.mensajeErrorAutenticacion)
    });
  }

}
