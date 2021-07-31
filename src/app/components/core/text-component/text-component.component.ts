import { Component, Input, OnInit } from "@angular/core";
import { TextEntity } from "./text-entity";

@Component({
  selector: "text-component",
  templateUrl: "./text-component.component.html",
  styleUrls: ["./text-component.component.less"]
})
export class TextComponent implements OnInit {

  @Input() textEntity: TextEntity = TextEntity.getEmptyTextEntity();

  ngOnInit(): void {
    // Called after creating the component
  }

}
