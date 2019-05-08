import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

import {AlertController} from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
/*
  Generated class for the ServicesBlePrinterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BlePrinterService {

  constructor(	public http: HttpClient,
  				private bluetoothSerial: BluetoothSerial,
  				private alertCtrl:AlertController) {
    console.log('Hello BlePrinterService Provider');
  }

  searchBt(){
    return this.bluetoothSerial.list();
  }

  connectBT(address){
    return this.bluetoothSerial.connect(address);

  }

  testPrint(address, printData){
    // let printData="Test hello this is a test \n\n\n\n Hello Test 123 123 123\n\n\n"

    
    let xyz=this.connectBT(address).subscribe(data=>{
      this.bluetoothSerial.write(printData).then(dataz=>{
        console.log("WRITE SUCCESS",dataz);

        let mno=this.alertCtrl.create({
          title:"Print SUCCESS!",
          buttons:['Dismiss']
        });
        mno.present();

        xyz.unsubscribe();
      },errx=>{
        console.log("WRITE FAILED",errx);
        let mno=this.alertCtrl.create({
          title:"ERROR "+errx,
          buttons:['Dismiss']
        });
        mno.present();
      });
      },err=>{
        console.log("CONNECTION ERROR",err);
        let mno=this.alertCtrl.create({
          title:"ERROR "+err,
          buttons:['Dismiss']
        });
        mno.present();
      });

  }

}
