import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  register(userInfo){
    console.log(userInfo);
  }

  signIn({ email, password }){
    console.log(`sign in with: ${email} ${password}`);
  }

  recoverPassword(email){
    console.log(`recover: ${email}`);
  }

  signOut(){
    console.log('sign out');
  }
}
