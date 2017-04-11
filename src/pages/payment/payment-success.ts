/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../../pages/home/home'

@Component({
  selector: 'page-payment-success',
  templateUrl: 'payment-success.html'
})
export class PaymentSuccessPage {

  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;
  }

  goBack(): void{
    this.navCtrl.popTo(HomePage)
  }

}
