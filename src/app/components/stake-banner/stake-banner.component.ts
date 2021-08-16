import { Component, Input, OnInit } from '@angular/core';
import { faWallet, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'stake-banner',
  templateUrl: './stake-banner.component.html',
  styleUrls: ['./stake-banner.component.less']
})
export class StakeBannerComponent implements OnInit {

  @Input()
  public title: string = ""
  @Input()
  public subtitle: string = ""
  public faWallet: IconDefinition = faWallet;

  constructor() { }

  ngOnInit(): void {
  }

}
