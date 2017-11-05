import { Injectable } from '@angular/core';
import { AngularFireAuthModule, AngularFireAuth  } from 'angularfire2/auth';

// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  constructor(public afAuth: AngularFireAuth) { }
  loginWithGoogle() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    return this.afAuth.auth.signOut();
  }
}
