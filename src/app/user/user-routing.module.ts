import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {AuthenticationGuard} from '../services/authentication.guard';

const ROUTES: Routes = [
  {path: 'app-friends-userprofile', component: UserProfileComponent , canActivate: [AuthenticationGuard]}

];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthenticationGuard
  ]
})
export class UserRoutingModule { }
