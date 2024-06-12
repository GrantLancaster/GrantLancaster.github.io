import { TYPOLab } from "../../info.js";
import { buildLayoutParent, buildHorizontalRule, buildLayout } from "./section.js";

function buildContact() {
    const layoutParent = buildLayoutParent();// The parent div holding the two collumn layout
    const layout = buildLayout(false, false, false, false);// The div inside the parent that is the two collumn layout
    // Layout has two children Divs: left = childNodes[0] and right = childNodes[1]
    const horizontalRule = buildHorizontalRule();// The horizontal rule that seperates the chunks
    horizontalRule.id = "Contact";
    layoutParent.appendChild(horizontalRule);

    //General Call to Action heading for Contact section 
    const contactHeading = document.createElement("h1");
    contactHeading.textContent = TYPOLab.Sections.Contact.callToAction;
    layout.childNodes[0].appendChild(contactHeading); //Append to the left side of the layout

    //Sub heading for the call to action 
    const contactSubHeading = document.createElement("h3");
    contactSubHeading.textContent = TYPOLab.Sections.Contact.subTitle;
    layout.childNodes[0].appendChild(contactSubHeading);//Append to the left side, bellow the main heading

    // Parent that holds the contact fields
    const contactForm = document.createElement("div");
    contactForm.id = "contactForm";

        // Create the box that accepts the first name
        const firstName = document.createElement("input");
        firstName.type = "text", firstName.name = "first-Name";
        firstName.placeholder = "First Name", firstName.autocomplete = "given-name";
        contactForm.appendChild(firstName);

        // Create the box that accepts the last name
        const lastName = document.createElement("input");
        lastName.type = "text", lastName.name = "last-name";
        lastName.placeholder = "Last Name", lastName.autocomplete = "family-name";
        contactForm.appendChild(lastName);

        // Create the email field for the form
        const email =  document.createElement("input");
        email.type = "email", email.name = "user_email";
        email.placeholder = "Email Address", email.autocomplete = "off";
        contactForm.appendChild(email);

        // A Submit button for the form
        const submit = document.createElement("button");
        submit.id = "submitButton", submit.type = "submit", submit.textContent = "Submit";
        contactForm.appendChild(submit);
    
        layout.childNodes[1].appendChild(contactForm);//Append the whole contact form the right side of the layout

        layoutParent.appendChild(layout);

    return layoutParent
}

//Create a variable that is the whole contact div and contents
//  Then export the variable to be used other places.
const contact = buildContact();

export { contact }