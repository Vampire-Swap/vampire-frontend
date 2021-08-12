import { Component, Input, OnInit } from '@angular/core';
import { BannerCard } from './BannerCard';

@Component({
  selector: 'banner-card',
  templateUrl: './banner-card.component.html',
  styleUrls: ['./banner-card.component.less']
})
export class BannerCardComponent implements OnInit {

  @Input() public bannerCard: BannerCard = new BannerCard();

  constructor() { }

  ngOnInit(): void {
  }

}
