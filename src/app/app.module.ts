import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AppRouting } from './app.routing';
import {UserModule} from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { ProductService } from './products/product.service';

const APP_ID = 'PhotoSale';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId : APP_ID }) ,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    AuthenticationModule,
    AppRouting,
    UserModule,
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
