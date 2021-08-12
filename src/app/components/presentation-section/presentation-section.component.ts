import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'presentation-section',
  templateUrl: './presentation-section.component.html',
  styleUrls: ['./presentation-section.component.less']
})
export class PresentationSectionComponent implements OnInit {

  @Input()
  public additionalClasses: Array<string> = new Array<string>();
  @Input()
  public imagePath: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
