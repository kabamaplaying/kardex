import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { HomeLandingComponent } from './home-landing/home-landing.component';



@NgModule({
  declarations: [SidenavComponent, FooterComponent, HeaderComponent, HomeLandingComponent],
  imports: [
    CommonModule, MaterialModule
  ], exports: [SidenavComponent, FooterComponent, HeaderComponent]
})
export class SharedModule { }
