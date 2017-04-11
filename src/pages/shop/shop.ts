/**
 * Created by zhongyuqiang on 17/2/20.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ShopOrderPage } from "../shop-order/shop-order";

@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html'
})
export class ShopPage {

  constructor(public navCtrl: NavController) {

  }

  goNextStep(): void{
    this.navCtrl.push(ShopOrderPage)
  }

}
