import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Token, TokenPriceDataFeed, TRACKED_TOKEN } from './tokenData';
import { map } from 'rxjs/operators';

@Component({
  selector: 'price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.less']
})
export class PriceChartComponent implements OnInit {

  public priceFeed: Observable<Token> = new Observable();

  constructor(private tokenPriceDataFeed: TokenPriceDataFeed) { }

  ngOnInit(): void {
    this.priceFeed = this.tokenPriceDataFeed
      .watch(
        {
          tokenId: TRACKED_TOKEN,
          numberOfDays: 30
        }
      )
      .valueChanges
      .pipe(
        map((result) => result.data)
      )

    this.priceFeed.subscribe((data) => console.log(data));
  }

}
