/**
 * Created by zhongyuqiang on 17/2/19.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-appoint-success',
  templateUrl: 'appointment-success.html'
})
export class AppointmentSuccessPage {

  constructor(public navCtrl: NavController) {

  }

  goBack():void{
    this.navCtrl.pop();
  }

}
