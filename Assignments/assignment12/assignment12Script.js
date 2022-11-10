const oneButton = undefined;
const twoButton = undefined;
const threeButton = undefined;
const fourButton = undefined;
const fiveButton = undefined;
const sixButton = undefined;
const sevenButton = undefined;
const eightButton = undefined;
const nineButton = undefined;
const zeroButton = undefined;
const output = document.querySelector(".output");

let queryList = [".oneButton", ".twoButton", ".threeButton", ".fourButton",
                ".fiveButton", ".sixButton", ".sevenButton", ".eightButton",
                ".nineButton", ".zeroButton"];
let btnList = [oneButton, twoButton, threeButton, fourButton,
                fiveButton, sixButton, sevenButton, eightButton,
                nineButton, zeroButton];



for (let i = 0; i <btnList.length; i++) {
    btnList[i] = document.querySelector(queryList[i]);
    btnList[i].addEventListener("click", (e) => {
        console.log(e.target.value);
        switch (e.target.value) {
            case "1":
                console.log("number 1 pressed");
                break;
            case "2":
                console.log("number 2 pressed");
                break;
            case "3":
                console.log("number 3 pressed");
                break;
            case "4":
                console.log("number 4 pressed");
                break;
            case "5":
                console.log("number 5 pressed");
                break;
            case "6":
                console.log("number 6 pressed");
                break;
            case "7":
                console.log("number 7 pressed");
                break;
            case "8":
                console.log("number 8 pressed");
                break;
            case "9":
                console.log("number 9 pressed");
                break;
            case "0":
                console.log("number 0 pressed");
                break;
        }
    });
    console.log("selector added");
}