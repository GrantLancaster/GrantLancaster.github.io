
const btn = document.querySelector("button");
btn.addEventListener("click", () => displayMessage("Your inbox is almost full - delete some mails", "warning"));

function displayMessage(msgText, msgType) {
    const body = document.body;
    
    const parentBox = document.createElement("div");
    parentBox.setAttribute("class","parentBox");
    body.appendChild(parentBox);

    for (let i = 5;i >= 0; i--) {
        const panel = document.createElement("div");
        panel.setAttribute("class","msgBox");
        parentBox.appendChild(panel);

        const msg = document.createElement("p");
        msg.textContent = msgText;
        panel.appendChild(msg);

        const closeBtn = document.createElement("button");
        closeBtn.textContent = "x";
        panel.appendChild(closeBtn);

        closeBtn.addEventListener("click", () =>
        panel.parentNode.removeChild(panel));

        if (msgType === "warning") {
            msg.style.backgroundImage = "url(warning.png)";
            panel.style.backgroundColor = "red";
        } else if (msgType === "chat") {
            msg.style.backgroundImage = "url(chat.png)";
            panel.style.backgroundColor = "aqua";
        } else {
            msg.style.paddingLeft = "20px";
        }
    }   
}
