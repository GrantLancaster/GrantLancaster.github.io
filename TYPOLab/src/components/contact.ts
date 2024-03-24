/*
HOW THIS IS GOING TO WORK:
    backend:
        - Mailchimp marketing APi
            https://mailchimp.com/developer/marketing/guides/create-your-first-audience/
        Should be able to use this API to write contacts and have them be signed up for the
        news letter through the TYPOLab website.
        - HTML forms should be able to be used to capure the necessary information for this.
        Follow this README to get this setup, or ideas on how to get it work
            https://github.com/LeeRenJie/Newsletter-signup-page
*/

import { TYPOLab } from "./info.ts";

function buildContactPage() {
    const contactParent: HTMLDivElement = document.createElement("div");
    contactParent.id = "contactParent";

    return contactParent
}

const contactPage = buildContactPage();

export { contactPage }