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

    const contactAction: HTMLHeadingElement= document.createElement("h1");
    contactAction.className = "title";
    contactAction.textContent = `${TYPOLab.Sections.Contact.callToAction}`
    contactParent.appendChild(contactAction);

    const contactSubTitle: HTMLHeadingElement = document.createElement("h2");
    contactSubTitle.id = "contactSubTitle";
    contactSubTitle.textContent = `${TYPOLab.Sections.Contact.subTitle}`;
    contactParent.appendChild(contactSubTitle);

    const formParent: HTMLFormElement = document.createElement("form");
    formParent.id = "formParent";

    const nameParent: HTMLDivElement = document.createElement("div");
    nameParent.id = "nameParent";

    const fName: HTMLInputElement = document.createElement("input");
    fName.id = "firstName", fName.type = "text", fName.name = "first_name";
    fName.placeholder = "First Name", fName.autocomplete = "given-name";
    nameParent.appendChild(fName);

    const lName: HTMLInputElement = document.createElement("input");
    lName.id = "lastName", lName.type = "text", lName.name = "last_name";
    lName.placeholder = "Last Name", lName.autocomplete = "family-name";
    nameParent.appendChild(lName);

    formParent.appendChild(nameParent);

    const email: HTMLInputElement = document.createElement("input");
    email.id = "email", email.type = "email", email.name = "user_email";
    email.placeholder = "Email Address", email.autocomplete = "off";
    formParent.appendChild(email);

    const submit: HTMLButtonElement = document.createElement("button");
    submit.id = "submitButton", submit.type = "submit", submit.textContent = "Submit";
    formParent.appendChild(submit);

    contactParent.appendChild(formParent);

    return contactParent
}

const contactPage = buildContactPage();

export { contactPage }