import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
//import {PageNotFoundComponent} from './notfound/page-not-found.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';

export const ROUTES: Routes = [
  {path: 'welcome',  component: WelcomeComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailComponent},
  //{path: '', redirectTo:'welcome',   pathMatch: 'full'},
  //{path: '**', redirectTo:'welcome',   pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES
    )
  ],
   
  exports: [
    RouterModule
  ]
})
export class AppRouting {
}