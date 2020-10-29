import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './auth/landing/landing.component';
import { MaterialModule } from '../shared/material/material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, LandingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ]
})
export class LandingModule { }
