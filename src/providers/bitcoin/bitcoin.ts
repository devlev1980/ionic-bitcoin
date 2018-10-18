import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Bitcoin} from "../../models/bitcoin.model";

/*
  Generated class for the BitcoinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitcoinProvider {
private apiURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC';
  constructor(private http: HttpClient) {
  }

  getBitcoinPrice(currency){
    return this.http.get<Bitcoin>(`${this.apiURL}${currency}`)
  }

}
