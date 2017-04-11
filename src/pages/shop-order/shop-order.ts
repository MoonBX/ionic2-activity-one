/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ShopOrderSelectadPage } from "../shop-order-selectad/shop-order-selectad";
import { PaymentPage } from '../payment/payment';

@Component({
  selector: 'page-shop-order',
  templateUrl: 'shop-order.html'
})
export class ShopOrderPage {

  constructor(public navCtrl: NavController) {

  }

  skipToSelectAddr(): void{
    this.navCtrl.push(ShopOrderSelectadPage)
  }

  skipToPay(): void{
    this.navCtrl.push(PaymentPage)
  }
}
