import { Component, OnInit } from "@angular/core";
import { faChevronRight, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { ThemeChangerService } from "src/app/services/theme-changer.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {

  private currentTheme: string = "light";
  public secondPresentation: Array<string> = Array.of("flex-row-reverse", "mt-20")
  public faChevronRight: IconDefinition = faChevronRight;

  constructor(private themeChangerService: ThemeChangerService) { 
    themeChangerService.currentTheme.subscribe(theme => this.currentTheme = theme)
  }

  ngOnInit(): void {
  }


}
