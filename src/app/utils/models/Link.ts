import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

/**
 * Models a Link that will be displayed in the application
 * 
 * @param {string} name The name of the link, the actual text being displayed.
 * @param {string} href The URL to which the link will transport the user.
 * @param {IconDefinition} icon Optional - An icon to be displayed on the left side of the link text.
 */
export class Link {
    public name: string
    public href: string
    public icon: IconDefinition|null = null

    constructor(name: string, href: string, icon?: IconDefinition) {
        this.name = name
        this.href = href
        if (icon !== undefined) {
            this.icon = icon
        }
    }
}