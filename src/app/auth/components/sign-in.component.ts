import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-sign-in',
  template: `
      <div class="row">
        <div class="col-6">
          <h2>Sign in</h2>
          <form (ngSubmit)="auth.signIn(userInfo)">
            <div class="form-group">
              <label>Email address</label>
              <input type="text" 
                     name="email"
                     [(ngModel)]="userInfo.email"
                     class="form-control" 
                     placeholder="Enter email">
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" 
                     class="form-control"
                     name="password"
                     [(ngModel)]="userInfo.password"
                     placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form> 
          <a routerLink="register">create new account</a>
        </div>
      </div>
  `,
  styles: []
})
export class SignInComponent {

  userInfo = { email: '', password: '' };
  constructor(public auth: AuthService) {}

}
