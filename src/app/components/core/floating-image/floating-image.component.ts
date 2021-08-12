import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'floating-image',
  templateUrl: './floating-image.component.html',
  styleUrls: ['./floating-image.component.less']
})
export class FloatingImageComponent implements OnInit {

  @Input()
  public imagePath: string = ""
  @Input()
  public imageAlt: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
