import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.auth.onAuthStateChanged(
      (auth) => {
        if (auth != null) {
            // User is logged in, use the user object for its info.
            this.isLoggedIn = true;
            this.user_displayName = auth.displayName;
            // etc.
        } else {
            // User is not logged in, redirect to where you need to.
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        }
      }
    );
  }
}
