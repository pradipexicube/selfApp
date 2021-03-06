import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SigninwithmobilePage } from '../signinwithmobile/signinwithmobile';

/**
 * Generated class for the InitialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {
  name="initial-content";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  public signinFunction(){
    this.navCtrl.push(SigninwithmobilePage);
  }

  public signupFunction(){
    this.navCtrl.push(SigninwithmobilePage);
  }

}
