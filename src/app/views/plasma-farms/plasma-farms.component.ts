import { Component, OnInit } from '@angular/core';
import { Pool } from 'src/app/components/core/pool/pool';

@Component({
  selector: 'plasma-farms',
  templateUrl: './plasma-farms.component.html',
  styleUrls: ['./plasma-farms.component.less']
})
export class PlasmaFarmsComponent implements OnInit {

  public pools: Array<Pool> = new Array<Pool>();

  constructor() { }

  ngOnInit(): void {
    let pool: Pool = new Pool("VMP/MATIC LP", "VMP", "/favicon.svg");
    pool.apr = "17K"
    pool.deposited = "1200"
    pool.earned = "150"
    pool.tvl = "3.5M"
    pool.approved = true
    pool.fee = 3;
    pool.multiplier = 10;

    this.pools.push(pool)
    this.pools.push(pool)
    this.pools.push(pool)
    this.pools.push(pool)
  }

}
