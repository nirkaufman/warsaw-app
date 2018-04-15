import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-register',
  template: `
    <div class="row">
      <div class="col-6">
        <h2>Register</h2>
        <form (ngSubmit)="register()">
          <div class="form-group">
            <label>Full name</label>
            <input type="text"
                   name="fullName"
                   [(ngModel)]="userInfo.fullName"
                   class="form-control"
                   placeholder="Enter your full name">
          </div>

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
                   name="password"
                   [(ngModel)]="userInfo.password"
                   class="form-control">
          </div>
          
          <div>
            <span class="text-danger">{{ errorMsg }}</span>
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RegisterComponent  {
  userInfo = {fullName: '', email: '', password: ''};
  errorMsg = '';
  public auth: AuthService;


  constructor(auth: AuthService) {
    this.auth = auth;
  }

  register(){
    this.auth.register(this.userInfo)
        .catch( ({ message }) => this.errorMsg = message)
  }

}
