import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './containers/auth.component';
import {SignInComponent} from './components/sign-in.component';
import {RegisterComponent} from './components/register.component';
import {RecoverComponent} from './components/recover.component';
import {RouterModule} from "@angular/router";
import { AuthService } from './services/auth.service';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild([
        {path: '', component: SignInComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'recover', component: RecoverComponent},
      ])
  ],
  declarations: [
    AuthComponent,
    SignInComponent,
    RegisterComponent,
    RecoverComponent
  ],
  providers: [AuthService]
})
export class AuthModule {
}
