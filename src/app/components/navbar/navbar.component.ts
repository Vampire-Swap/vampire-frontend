import { Component, Input, OnInit } from '@angular/core'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import {
  faBurn,
  faCloudMoon,
  faMapMarkedAlt,
  faSun,
  faTint,
  faWallet,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { Web3ModalService } from '@mindsorg/web3modal-angular'
import { MetamaskService } from 'src/app/services/metamask.service'
import { ThemeChangerService } from 'src/app/services/theme-changer.service'
import { Link } from 'src/app/utils/models/Link'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],
})
export class NavbarComponent implements OnInit {
  public title: string = 'VampireSwap'
  @Input() public leftSideLinks: Array<Link> = new Array<Link>(
    new Link('Blood Pools', '/pools', faTint),
    new Link('Plasma Farms', '/farms', faBurn),
  )
  @Input() public rightSideLinks: Array<Link> = new Array<Link>(
    new Link('Roadmap', '/', faMapMarkedAlt),
    new Link('More Info', '/', faNewspaper),
  )
  public rightSideLinksMobile: Array<Link> = new Array<Link>(
    new Link('More Info', '/', faNewspaper),
  )
  public faCloudMoon: IconDefinition = faCloudMoon;
  public faSun: IconDefinition = faSun;
  public currentThemeIcon: IconDefinition = this.faCloudMoon;
  public faWallet: IconDefinition = faWallet;
  public faNewspaper: IconDefinition = faNewspaper;

  constructor(private themeChangerService: ThemeChangerService, private metamaskService: MetamaskService, private web3ModalService: Web3ModalService) {}

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
      this.themeChangerService.updateTheme("light")
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      this.currentThemeIcon = this.faSun
      this.themeChangerService.updateTheme("dark")
    }
  }

  public async connect() {
    const provider = await this.web3ModalService.open()

    console.log(provider);
  }
}
