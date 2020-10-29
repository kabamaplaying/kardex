import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router, private readonly authService: AuthService) { }

  ngOnInit(): void {
  }

  productos(){
    this.router.navigate(['/productos'])
  }
  facturas(){
    this.router.navigate(['/factura'])
  }

  logout(){

  this.authService.logout();
  this.router.navigate(['/landing'])
  }

}
