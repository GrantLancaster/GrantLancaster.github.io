

function buildPageContentBackground() {
    const contentBackground: HTMLDivElement = document.createElement("div");
    contentBackground.id = "pageContentBackground";

    return contentBackground
}
function buildPageContent() {
    const content: HTMLDivElement = document.createElement("div");
    content.id = "pageContent";

    return content;
}

const pageContentBackground: HTMLDivElement = buildPageContentBackground();
const pageContent: HTMLDivElement = buildPageContent();

export { pageContentBackground, pageContent }