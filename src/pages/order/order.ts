/**
 * Created by zhongyuqiang on 17/2/16.
 */
import { Component } from '@angular/core';
import {ModalPage} from '../order/cancel-modal'

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html'
})
export class OrderPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  cancel(): void{
    let prompt = this.alertCtrl.create({
      title: '温馨提示',
      message: '<div>1. 若确认取消，请联系客服400-150-5088</div><div>2. 如客服确认取消订单后，分期协议会在3-7个工作日内终止</div><div>3. 退款返现金额会在15个工作日内，打到你的银行账户</div>',
      buttons: [
        {
          text: '不取消了',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '拨打电话',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
