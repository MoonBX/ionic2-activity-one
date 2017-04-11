/**
 * Created by zhongyuqiang on 17/2/22.
 */
/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component } from '@angular/core';
import { NavController, AlertController, ViewController} from 'ionic-angular';
import { PaymentSuccessPage } from '../../pages/payment/payment-success'

@Component({
  selector: 'page-payment-confirm',
  templateUrl: 'payment-confirm.html'
})
export class PaymentConfirmPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public viewCtrl: ViewController) {}


  close() {
    this.viewCtrl.dismiss();
  }

  payConfirm(): void{
    let prompt = this.alertCtrl.create({
      title: '签署协议',
      message:
        `<div>1、签订1元购协议后，只需先支付1元，即可预约上门安装并使用（免费安装、免费配送）</div>
         <div>2、一个月纯体验期内，用户不满意，可无条件货，只收取1元的费用；</div>
         <div>3、整个代扣期内（即13个月），如果因为产品质量问题，用户可以无条件退货，并退还全部已支付金额；代扣期的前6个月内，非产品质量问题，用户不满意可无条件退货，退还已支付金额的50%；代扣期的第7到第13个月内，非产品质量问题，用户不满意可无条件退货，退还已支付金额的30%；（备注：非产品质量问题，如果客户在使用的第3个月想退货，此时他的已支付金额为300元，我们会终止代扣服务，停止扣款，并退还已支付金额300的50%，即150元）</div>`,
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');

          }
        },
        {
          text: '确认',
          handler: data => {
            console.log('Saved clicked');
            this.navCtrl.push(PaymentSuccessPage)
          }
        }
      ]
    });
    this.viewCtrl.dismiss();
    prompt.present();
  }

}
