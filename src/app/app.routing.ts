import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { AuthenticationGuard } from './services/authentication.guard';

export const ROUTES: Routes = [
  {path: 'welcome',  component: WelcomeComponent},
  {path: 'products', component: ProductListComponent, canActivate: [AuthenticationGuard]},
  {path: 'products/:id', component: ProductDetailComponent, canActivate: [AuthenticationGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class AppRouting {
}
