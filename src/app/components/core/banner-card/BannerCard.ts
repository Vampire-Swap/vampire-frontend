/**
 * Contains the attributes used to render a banner card.
 */
export class BannerCard {
    title: string = "";
    renderTitle: boolean = false;
    
    constructor(title?: string, renderTitle?: boolean) {
        if (title !== null && title !== undefined) {
            this.title = title;
        }

        if (renderTitle !== null && renderTitle !== undefined) {
            this.renderTitle = renderTitle;
        }
    }
}