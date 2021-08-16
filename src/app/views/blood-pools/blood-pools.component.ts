import { Component, OnInit } from '@angular/core';
import { faWallet, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BannerCard } from 'src/app/components/core/banner-card/BannerCard';
import { Pool } from 'src/app/components/core/pool/pool';

@Component({
  selector: 'blood-pools',
  templateUrl: './blood-pools.component.html',
  styleUrls: ['./blood-pools.component.less']
})
export class BloodPoolsComponent implements OnInit {

  public bannerCard: BannerCard = new BannerCard("Welcome to the Blood Pools", true)
  public faWallet:IconDefinition = faWallet;

  public pools: Array<Pool> = new Array<Pool>();

  constructor() { }

  ngOnInit(): void {
    let pool: Pool = new Pool("VMP", "VMP", "/favicon.svg");
    pool.apr = "17K"
    pool.deposited = "1200"
    pool.earned = "150"
    pool.tvl = "3.5M"
    pool.approved = true

    this.pools.push(pool)
    this.pools.push(pool)
    this.pools.push(pool)
    this.pools.push(pool)
  }

}
