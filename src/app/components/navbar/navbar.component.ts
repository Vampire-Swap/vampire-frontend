import { Component, Input, OnInit } from '@angular/core'
import {
  faCloudMoon,
  faMapMarkedAlt,
  faSun,
  faTint,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'src/app/utils/models/Link'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  public title: string = 'VampireSwap'
  @Input() public leftSideLinks: Array<Link> = new Array<Link>(
    new Link('Blood Pools', '/', faTint),
    new Link('Blood Farms', '/', faTint),
  )
  @Input() public rightSideLinks: Array<Link> = new Array<Link>(
    new Link('Roadmap', '/', faMapMarkedAlt),
    new Link('More Info', '/'),
  )
  public faCloudMoon: IconDefinition = faCloudMoon;
  public faSun: IconDefinition = faSun;
  public currentThemeIcon: IconDefinition = this.faCloudMoon;

  constructor() {}

  ngOnInit(): void {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.currentThemeIcon = this.faSun;
    }
  }

  public changeTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      this.currentThemeIcon = this.faCloudMoon
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      this.currentThemeIcon = this.faSun
    }
  }
}
