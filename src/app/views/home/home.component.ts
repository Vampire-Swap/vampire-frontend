import { Component, OnInit } from "@angular/core";
import { TextEntity, TextType } from "src/app/components/core/text-component/text-entity";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"]
})
export class HomeComponent implements OnInit {

  public textEntity: TextEntity;

  constructor() { 
    this.textEntity = new TextEntity(TextType.PARAGRAPH, "Hello vampire swap", Array.of("class1", "class2", "class3"), "test-entity")
  }

  ngOnInit(): void {
  }

}
