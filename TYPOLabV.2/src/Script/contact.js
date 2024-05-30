import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

function buildContact() {
    const layoutParent = buildLayoutParent();
    const layout = buildLayout(false, false, false, false);
    const horizontalRule = buildHorizontalRule();
    horizontalRule.id = "Contact";
    layoutParent.appendChild(horizontalRule);

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = TYPOLab.Sections.Contact.callToAction;
    layout.childNodes[0].appendChild(contactHeading);

    const contactSubHeading = document.createElement("h3");
    contactSubHeading.textContent = TYPOLab.Sections.Contact.subTitle;
    layout.childNodes[0].appendChild(contactSubHeading);

    const contactForm = document.createElement("div");
    contactForm.id = "contactForm";

        const firstName = document.createElement("input");
        firstName.type = "text", firstName.name = "first-Name";
        firstName.placeholder = "First Name", firstName.autocomplete = "given-name";
        contactForm.appendChild(firstName);

        const lastName = document.createElement("input");
        lastName.type = "text", lastName.name = "last-name";
        lastName.placeholder = "Last Name", lastName.autocomplete = "family-name";
        contactForm.appendChild(lastName);

        const email =  document.createElement("input");
        email.type = "email", email.name = "user_email";
        email.placeholder = "Email Address", email.autocomplete = "off";
        contactForm.appendChild(email);

        const submit = document.createElement("button");
        submit.id = "submitButton", submit.type = "submit", submit.textContent = "Submit";
        contactForm.appendChild(submit);
    
        layout.childNodes[1].appendChild(contactForm);

        layoutParent.appendChild(layout);

    return layoutParent
}

const contact = buildContact();

export { contact }