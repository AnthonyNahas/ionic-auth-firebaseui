import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthComponent} from './auth.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'signin'},
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent},
    ])
  ],
  declarations: [AuthComponent, SigninComponent, SignupComponent],
  exports: [AuthComponent, SigninComponent, SignupComponent]
})
export class AuthModule {
}
