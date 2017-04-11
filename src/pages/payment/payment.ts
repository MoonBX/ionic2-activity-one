/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PaymentConfirmPage } from "../payment/payment-confirm";

@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html'
})
export class PaymentPage {

  constructor(public navCtrl: NavController,
              public popoverCtrl: PopoverController) {

  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PaymentConfirmPage);
    popover.present();
  }

}
