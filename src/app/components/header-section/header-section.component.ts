import { Component, OnInit } from '@angular/core';
import { faChevronDown, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.less']
})
export class HeaderSectionComponent implements OnInit {

  public faChevronDown: IconDefinition = faChevronDown;

  constructor() { }

  ngOnInit(): void {
  }

}
