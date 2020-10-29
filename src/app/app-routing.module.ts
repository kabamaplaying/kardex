import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeKardexComponent } from './components/kardex/home-kardex/home-kardex.component';
import { KardexFacturaHomeComponent } from './components/kardex/kardex-factura-home/kardex-factura-home.component';
import { ProductosHomeComponent } from './components/kardex/productos/productos-home/productos-home.component';
import { LandingComponent } from './components/landing/auth/landing/landing.component';
import { HomeLandingComponent } from './components/shared/home-landing/home-landing.component';
import { AuthGuard } from './services/auth/auth.guard';


const routes: Routes = [
  {
    path: 'kardex',
    component: HomeKardexComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kardex/:idProducto',
    component: HomeKardexComponent,
    canActivate: [AuthGuard]
  },
   {
    path: '',
    component: ProductosHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'factura', component: KardexFacturaHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'factura/:idProductoMovimiento', component: KardexFacturaHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '',

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
