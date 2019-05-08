import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'; 


import { BlePrinterService } from '../services/BlePrinterService';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BluetoothSerial,
    BlePrinterService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
     
  ]
})
export class AppModule {}
