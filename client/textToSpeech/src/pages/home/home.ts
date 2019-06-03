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
