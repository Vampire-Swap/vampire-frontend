import { ComponentFixture, TestBed } from "@angular/core/testing";

import { TextComponent } from "./text-component.component";
import { TextEntity, TextType } from "./text-entity";

describe("TextComponentComponent", () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should create an h1", () => {
    const textEntity: TextEntity = new TextEntity(TextType.HEADER_1, "content", undefined, "text-entity-test")
    const compiled = fixture.nativeElement as HTMLElement;

    component.textEntity = textEntity
    fixture.detectChanges()

    const element = compiled.querySelector("h1#text-entity-test")

    expect(element).toBeTruthy()
    expect(element?.textContent).toEqual("content")
    expect(element?.id).toEqual("text-entity-test")
  });

  it("should create an h2", () => {
    const textEntity: TextEntity = new TextEntity(TextType.HEADER_2, "content", undefined, "text-entity-test")
    const compiled = fixture.nativeElement as HTMLElement;

    component.textEntity = textEntity
    fixture.detectChanges()

    const element = compiled.querySelector("h2#text-entity-test")

    expect(element).toBeTruthy()
    expect(element?.textContent).toEqual("content")
    expect(element?.id).toEqual("text-entity-test")
  });

  it("should create an h3", () => {
    const textEntity: TextEntity = new TextEntity(TextType.HEADER_3, "content", undefined, "text-entity-test")
    const compiled = fixture.nativeElement as HTMLElement;

    component.textEntity = textEntity
    fixture.detectChanges()

    const element = compiled.querySelector("h3#text-entity-test")

    expect(element).toBeTruthy()
    expect(element?.textContent).toEqual("content")
    expect(element?.id).toEqual("text-entity-test")
  });

  it("should create an p", () => {
    const textEntity: TextEntity = new TextEntity(TextType.PARAGRAPH, "content", Array.of("class1", "class2", "class3"), "text-entity-test")
    const compiled = fixture.nativeElement as HTMLElement;

    component.textEntity = textEntity
    fixture.detectChanges()

    const element = compiled.querySelector("p#text-entity-test")

    expect(element).toBeTruthy()
    expect(element?.textContent).toEqual("content")
    expect(element?.classList.toString()).toEqual(textEntity.generateClassString().trim())
    expect(element?.id).toEqual("text-entity-test")
  });
});
