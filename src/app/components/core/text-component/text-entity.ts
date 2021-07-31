/**
 * A text entity used for displaying text through the text component.
 */
export class TextEntity {
    textType: TextType
    content: string
    classNames: Array<string>
    id: string

    /**
     * Build a new TextEntity
     * @param {TextType} textType The type of text to be displayed.
     * @param {string} content The actual text to be displayed.
     * @param {Array<string>} classNames An array of class names that will be applied to the html element.
     * @param {string} id The id of the html element.
     */
    constructor(textType: TextType, content: string, classNames?: Array<string>, id?: string) {
        this.textType = textType
        this.content = content
        this.classNames = classNames !== undefined ? classNames : new Array<string>()
        this.id = id !== undefined ? id : ''
    }

    /**
     * Builds an empty TextEntity
     * @returns A text entity with a paragraph type and empty content.
     */
    public static getEmptyTextEntity(): TextEntity {
        return new TextEntity(TextType.PARAGRAPH, "");
    }

    public generateClassString(): string {
        let classString: string = ""

        this.classNames.forEach(className => classString += (" " + className))

        return classString;
    }
}

/**
 * Type of HTML element to create for a text entity.
 */
export enum TextType {
    HEADER_1 = "h1",
    HEADER_2 = "h2",
    HEADER_3 = "h3",
    PARAGRAPH = "p",
}