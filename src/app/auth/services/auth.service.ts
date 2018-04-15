import { Injectable } from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthService {

  constructor(private afa:AngularFireAuth) {}

  register(userInfo){
   return this.afa.auth
        .createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then( newUser => console.log(newUser) )
  }

  signIn({ email, password }){
    console.log(`sign in with: ${email} ${password}`);
  }

  recoverPassword(email){
    this.afa.auth.sendPasswordResetEmail(email);
  }

  signOut(){
    this.afa.auth.signOut();
  }
}
