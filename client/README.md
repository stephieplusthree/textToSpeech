## Client

create new ionic app in client folder with this command...............ionic start textToSpeech tabs --type=ionic-angular

============start of login ==============================
step 1: home.html create login page
Go to ionic framework and look up input. Create two buttons ofr login and register. 

<ion-content padding center text-center>
  <ion-title>Text to Speech</ion-title>
  <ion-list>
    <ion-item>
      <ion-input placeholder="Username" [(ngModel)]="username"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input placeholder="Password" type="password" [(ngModel)]="password"></ion-input>
    </ion-item>
  </ion-list>  
  
  <button ion-button full (click)="login()">Log In</button>
  <button ion-button full (click)="register()">Register</button>

</ion-content>

step 2: home.ts
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController) {

  }


  login() {
    console.log("Username: "+ this.username);

    console.log("Password: "+ this.password);
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}

step 3: create a register page and add register to app.module.ts

step 6: registration.html

<ion-header>
  <ion-navbar>
    <ion-title>
      Register
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
    <ion-list>
      <ion-item>
        <ion-input placeholder="Username" [(ngModel)]="username"></ion-input>
      </ion-item>
      <ion-item>
        <ion-input placeholder="Password" type="password" [(ngModel)]="password"></ion-input>
      </ion-item>
      <ion-item>
          <ion-input placeholder="Repeat password" type="password" [(ngModel)]="repass"></ion-input>
        </ion-item>
    </ion-list>  
    
    <button ion-button full (click)="register()">Register</button>
  </ion-content>

step 3 registration.ts
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

    username: string;
    password: string;
    repassword:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    if(this.username.length==0 || this.password.length==0 || this.repassword.length==0) {
      alert("Please fill all fields");
    }
  }
}

step 4: home.scss
page-home {
    #topButtons {
        display: flex;
        flex-direction: row;
    }
    #topButtons button {
        flex: 1;
    }
}

step 5: restart your front end server and test your app in the browser

step 6: sign in to ionicframework.com. 

step 10: login.html
copy text 

step 11: register.ts
paste copied text from login.html
change title to Create Account
change text from sign in to register
change class name to registerUser()

step 12: login.html
change class name to signInUser() on Sign In button

step 13: login.ts
create a signInUser method that console.log user.value and user.password
define the vari iconicables user and password
import Viewchild

step 14: register.ts
create a function named registerUser that will re the user's registered info
declare the variables user and password

step 15: go to browser, test out if we get console logs

step 16: create a speech  page
ionic g page speech

step 17: home.html
Change title to Speeches
create a button

step 18: speech.html
create a button named "signInUser" that will take the user to the speech page.