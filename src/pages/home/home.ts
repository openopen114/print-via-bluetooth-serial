import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { BlePrinterService } from '../../services/BlePrinterService';
import * as cptable from 'codepage/cputils.js';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	MACAddress = '88:6B:0F:97:C4:D9';

  constructor(	public navCtrl: NavController,
  				      private bluetoothSerial: BluetoothSerial,
                private blePrinterService: BlePrinterService) {

  }

 

  list(){ 
  	this.bluetoothSerial.list().then(res => {
  		console.log('list res')
  		console.log(res)
  	})
  }



  printToBLEPrinter(){  

    const CHAR_ESC ='\u001b';
    const LINE_FEED = '\n';
    const CARRIAGE_RETURN = '\r';


    // print data
    let printData = `${CHAR_ESC} ! 0 200 200 500 1 ${CARRIAGE_RETURN} ${LINE_FEED} 
                ENCODING BIG5   ${CARRIAGE_RETURN} ${LINE_FEED} 
                TEXT 0 0 10 10 ==> 繁體中文讚讚讚 ${CARRIAGE_RETURN} ${LINE_FEED}     

                FORM  ${CARRIAGE_RETURN} ${LINE_FEED}
                PRINT ${CARRIAGE_RETURN} ${LINE_FEED}
                `;

    //use https://www.npmjs.com/package/codepage to convert unicode to big5(codepage=950) and to uint8array            
    const convertPrintData = cptable.utils.encode(950,  printData);
    
    this.blePrinterService.testPrint(this.MACAddress, convertPrintData);
  }

 


}
