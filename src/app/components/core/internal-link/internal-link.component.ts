import { Component, Input, OnInit } from '@angular/core';
import { Link } from 'src/app/utils/models/Link';

@Component({
  selector: 'internal-link',
  templateUrl: './internal-link.component.html',
  styleUrls: ['./internal-link.component.less']
})
export class InternalLinkComponent implements OnInit {
  
  @Input()
  public link: Link = new Link("unknownLink", "/");

  constructor() { }

  ngOnInit(): void {
  }

}
