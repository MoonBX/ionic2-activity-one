/**
 * Created by zhongyuqiang on 17/2/22.
 */
/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage{

  constructor(public navCtrl: NavController) {

  }

  login(): void{
    this.navCtrl.push(TabsPage);
  }

}
