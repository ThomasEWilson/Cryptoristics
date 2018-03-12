import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../Shared/interfaces';
import { CurrencyPipe } from '@angular/common/src/pipes/number_pipe';

@Component({
  selector: 'app-crypto-call-row',
  templateUrl: './crypto-call-row.component.html',
  styleUrls: ['./crypto-call-row.component.scss']
})
export class CryptoCallRowComponent implements OnInit {

  @Input() currency: Currency;

  testCurrency: Currency = {
    marketCap: 15000000,
    tradeVolume: 123049,
    circulatingSupply: 16304793,
    pricePerUnit: 1.75,
    priceChange: 12.35
  };

  constructor() { }

  ngOnInit() {
  }

}
