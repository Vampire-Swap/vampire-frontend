import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.less']
})
export class BannerSectionComponent implements OnInit {

  @Input()
  public currentTheme: string = 'light'

  constructor() { }

  ngOnInit(): void {
  }

}
