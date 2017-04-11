import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AppointmentSuccessPage } from '../appointment-success/appointment-success'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  sendToAppointment(): void{
    this.navCtrl.push(AppointmentSuccessPage)
  }
}
