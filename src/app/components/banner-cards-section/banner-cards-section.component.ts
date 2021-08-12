import { Component, OnInit } from '@angular/core';
import { faFacebook, faMedium, faTelegramPlane, faTwitter, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { BannerCard } from '../core/banner-card/BannerCard';

@Component({
  selector: 'banner-cards-section',
  templateUrl: './banner-cards-section.component.html',
  styleUrls: ['./banner-cards-section.component.less']
})
export class BannerCardsSectionComponent implements OnInit {

  public bannerCard: BannerCard = new BannerCard("Follow us on social media", true);
  public faTwitter: IconDefinition = faTwitter;
  public faFacebook: IconDefinition = faFacebook;
  public faMedium: IconDefinition = faMedium;
  public faTelegramPlane: IconDefinition = faTelegramPlane;
  public maxAprFarms: number = 782.15;
  public maxAprPools: number = 546.78;

  constructor() { }

  ngOnInit(): void {
  }

}
