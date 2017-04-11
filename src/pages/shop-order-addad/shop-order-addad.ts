/**
 * Created by zhongyuqiang on 17/2/21.
 */
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
//import { AppointmentSuccessPage } from '../appointment-success/appointment-success'
import {CityPickerService} from "../provider/city-picker";

@Component({
  selector: 'page-shop-addad',
  templateUrl: 'shop-order-addad.html',
  providers: [CityPickerService]
})
export class ShopOrderAddadPage {
  cityData: any[]; //城市数据
  cityName:string = '北京市 - 北京市 - 东城区'; //初始化城市名
  code:string; //城市编码
  constructor(
    public navCtrl: NavController,
    public cityPickerSev: CityPickerService,
    public navParams: NavParams
  ) {

    this.setCityPickerData();
  }

  /**
   * 获取城市数据
   */
  setCityPickerData(){
    this.cityPickerSev.getCitiesData()
      .then( data => {
        this.cityData = data;
      });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event){
    console.log(event);
    this.code = event['region'].value
  }

  createAddress(): void{
    this.navCtrl.pop();
  }
}
