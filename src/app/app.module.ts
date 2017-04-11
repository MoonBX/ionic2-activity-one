import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { OrderPage } from '../pages/order/order';
import { AppointmentSuccessPage } from '../pages/appointment-success/appointment-success'
import { ShopPage } from '../pages/shop/shop';
import { ShopOrderPage } from '../pages/shop-order/shop-order';
import { ShopOrderSelectadPage } from '../pages/shop-order-selectad/shop-order-selectad';
import { ShopOrderAddadPage } from '../pages/shop-order-addad/shop-order-addad';
import { PaymentPage } from '../pages/payment/payment';
import { PaymentConfirmPage } from '../pages/payment/payment-confirm';
import { LoginPage } from '../pages/login/login'
import { PaymentSuccessPage } from '../pages/payment/payment-success';
import { CityPickerModule } from  "ionic2-city-picker/dist/city-picker.module"

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OrderPage,
    AppointmentSuccessPage,
    ShopPage,
    ShopOrderPage,
    ShopOrderSelectadPage,
    ShopOrderAddadPage,
    PaymentPage,
    PaymentConfirmPage,
    LoginPage,
    PaymentSuccessPage
  ],
  imports: [
    CityPickerModule,
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OrderPage,
    AppointmentSuccessPage,
    ShopPage,
    ShopOrderPage,
    ShopOrderSelectadPage,
    ShopOrderAddadPage,
    PaymentPage,
    PaymentConfirmPage,
    LoginPage,
    PaymentSuccessPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
