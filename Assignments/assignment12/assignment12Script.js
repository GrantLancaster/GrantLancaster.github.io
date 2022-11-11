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

const firstThree = undefined;
const secondThree = undefined;
const lastFour = undefined;

const placeHolder = "0000000000";
let phoneNum = 0;

let queryList = [".oneButton", ".twoButton", ".threeButton", ".fourButton",
                ".fiveButton", ".sixButton", ".sevenButton", ".eightButton",
                ".nineButton", ".zeroButton"];
let btnList = [oneButton, twoButton, threeButton, fourButton,
                fiveButton, sixButton, sevenButton, eightButton,
                nineButton, zeroButton];
let inputFieldList = [firstThree, secondThree, lastFour];
let inputQueryList = [".firstThree", ".secondThree", ".lastFour"]

function targetField() {
    for (let i = 0; i < inputFieldList.length; i++) {
        inputFieldList[i] = document.querySelector(inputQueryList[i]);
        inputFieldList[i].addEventListener("click", (e) => {
            console.log(e.target.name);
            switch (e.target.name) {
                case "area-code":
                    activeNumPad(inputFieldList[0]);
                    break;
                case "middle-three":
                    activeNumPad(inputFieldList[1]);
                    break;
                case "last-four":
                    activeNumPad(inputFieldList[2]);
                    break;
            }
        })
    }
}

function activeNumPad(target) {
    for (let i = 0; i <btnList.length; i++) {
        btnList[i] = document.querySelector(queryList[i]);
        btnList[i].addEventListener("click", (e) => {
            console.log(e.target.value);
            switch (e.target.value) {
                case "1":
                    if (target.value != "") {
                        target.value = target.value + "1";
                        console.log(target.value.length);
                    } else {
                        target.value = "1";
                        console.log(target.value.length);
                    }
                    if (target.value.length == 3) {
                        target.disable = true;
                    }
                    break;
                case "2":
                    phoneNum = phoneNum + 2;
                    output.textContent = phoneNum
                    break;
                case "3":
                    console.log("number 3 pressed");
                    phoneNum = phoneNum + 3;
                    output.textContent = phoneNum
                    break;
                case "4":
                    console.log("number 4 pressed");
                    phoneNum = phoneNum + 4;
                    output.textContent = phoneNum
                    break;
                case "5":
                    console.log("number 5 pressed");
                    phoneNum = phoneNum + 5;
                    output.textContent = phoneNum
                    break;
                case "6":
                    console.log("number 6 pressed");
                    phoneNum = phoneNum + 6;
                    output.textContent = phoneNum
                    break;
                case "7":
                    console.log("number 7 pressed");
                    phoneNum = phoneNum + 7;
                    output.textContent = phoneNum
                    break;
                case "8":
                    console.log("number 8 pressed");
                    phoneNum = phoneNum + 8;
                    output.textContent = phoneNum
                    break;
                case "9":
                    console.log("number 9 pressed");
                    phoneNum = phoneNum + 9;
                    output.textContent = phoneNum
                    break;
                case "0":
                    console.log("number 0 pressed");
                    phoneNum = phoneNum + 2;
                    output.textContent = phoneNum
                    break;
            }
        });
    }
}
targetField();
output.textContent = placeHolder;