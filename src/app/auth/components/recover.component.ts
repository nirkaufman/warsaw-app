import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-recover',
  template: `
    <div class="row">
      <div class="col-6">
        <h2>Recover</h2>
        <form (ngSubmit)="auth.recoverPassword(email)">
          <div class="form-group">
            <label>Email</label>
            <input type="text"
                   name="email"
                   [(ngModel)]="email"
                   class="form-control">
          </div>
          <button type="submit" class="btn btn-primary">Recover</button>
        </form>
      </div>
    </div>
  `,
  styles: []
})
export class RecoverComponent  {
  auth: AuthService;
  email = '';

  constructor(auth: AuthService) {
    this.auth = auth;
  }

}
