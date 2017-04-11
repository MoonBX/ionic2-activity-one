/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';

import { ShopOrderAddadPage } from '../shop-order-addad/shop-order-addad'

@Component({
  selector: 'page-shop-selectad',
  templateUrl: 'shop-order-selectad.html'
})
export class ShopOrderSelectadPage {

  constructor(public navCtrl: NavController) {

  }

  skipToAddAddr(): void{
    this.navCtrl.push(ShopOrderAddadPage)
  }

  selectSuccess(): void{
    this.navCtrl.pop();
  }
}
