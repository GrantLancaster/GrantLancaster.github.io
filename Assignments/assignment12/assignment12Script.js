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
const confirmButton = undefined;

const output = document.querySelector(".output");
const form = document.querySelector("form");

const firstThree = undefined;
const secondThree = undefined;
const lastFour = undefined;

const placeHolder = "0000000000";
let phoneNum = 0;
const positionList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];
const posBlocks =[];

let queryList = [".oneButton", ".twoButton", ".threeButton", ".fourButton",
                ".fiveButton", ".sixButton", ".sevenButton", ".eightButton",
                ".nineButton", ".zeroButton", ".confirm"];
let btnList = [oneButton, twoButton, threeButton, fourButton,
                fiveButton, sixButton, sevenButton, eightButton,
                nineButton, zeroButton, confirmButton];
let inputFieldList = [firstThree];
let inputQueryList = [".firstThree", ".secondThree", ".lastFour"]

function fieldChange(target, num) {
    target = target;
    if (target.value != "") {
        target.value = target.value + num;
        console.log(target.value.length);
    } else {
        target.value = num;
        console.log(target.value.length);
    }
    if (target.value.length >= 3) {
        target = inputFieldList[1];
    }
}

function targetField() {
    for (let i = 0; i < inputFieldList.length; i++) {
        inputFieldList[i] = document.querySelector(inputQueryList[i]);
        inputFieldList[i].addEventListener("click", (e) => {
            console.log(e.target.name);
            switch (e.target.name) {
                case "area-code":
                    activeNumPad(inputFieldList[0]);
                    break;
            }
        })
    }
}

function swapButtonsGrid(target, max=11) {
    let newPosList = [];
    let block = "";
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 3; i++) {
                let position1 = Math.floor(Math.random() * max);
                console.log(`number = ${position1}`);
                let index1 = positionList[position1];
                console.log(`index1 = ${index1}`);
                if (block == "") {
                    block = index1;
                } else {
                    block = block + " " + index1;
                }
                }
            block.toString();
            newPosList.push(block);
            console.log(block);
            console.log(typeof block);
            block = " ";
            }
            console.log(`Position List: ${newPosList}`);
            console.log(newPosList[0]);
            console.log(typeof newPosList[0]);
            let string1 = newPosList[0] + newPosList[1] + newPosList[2] + newPosList[3];
            console.log(string1);
            let string2 = String(string1);
            console.log( typeof string2);
            form.style.gridTemplateAreas = String(newPosList[0] + " " + newPosList[1] + " " + newPosList[2] + " " + newPosList[3]);
}

function activeNumPad(target) {
    target = target;
    for (let i = 0; i < btnList.length; i++) {
        btnList[i] = document.querySelector(queryList[i]);
        btnList[i].addEventListener("click", (e) => {
            switch (e.target.value) {
                case "1":
                    fieldChange(target, "1");
                    swapButtonsGrid(target, 11);
                    break;
                case "2":
                    fieldChange(target, "2");
                    break;
                case "3":
                    fieldChange(target, "3");
                    break;
                case "4":
                    fieldChange(target, "4");
                    break;
                case "5":
                    fieldChange(target, "5");
                    break;
                case "6":
                    fieldChange(target, "6");
                    break;
                case "7":
                    fieldChange(target, "7");
                    break;
                case "8":
                    fieldChange(target, "8");
                    break;
                case "9":
                    fieldChange(target, "9");
                    break;
                case "0":
                    fieldChange(target, "0");
                    break;
                case "Enter":
                    alert(`You have entered ${inputFieldList[0].value}`);
                    alert("An error has occured. Please enter again.");
                    target.value = "";
                    break;
            }
        });
    }
}
targetField();