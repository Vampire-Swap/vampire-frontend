import { Component, OnInit } from "@angular/core";
import { ThemeChangerService } from "src/app/services/theme-changer.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {

  private currentTheme: string = "light";

  constructor(private themeChangerService: ThemeChangerService) { 
    themeChangerService.currentTheme.subscribe(theme => this.currentTheme = theme)
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.themeChangerService.currentTheme.unsubscribe();
  }

}
