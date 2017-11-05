import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';


export const firebaseConfig = {
    apiKey: "AIzaSyAd8CgbeCQqFp1cf0ypatv7IfqxBrNWiAg",
    authDomain: "facture-25db5.firebaseapp.com",
    databaseURL: "https://facture-25db5.firebaseio.com",
    projectId: "facture-25db5",
    storageBucket: "facture-25db5.appspot.com",
    messagingSenderId: "231919835896"
  };

  const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
