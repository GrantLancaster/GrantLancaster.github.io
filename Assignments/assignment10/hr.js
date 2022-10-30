const header = document.querySelector("header"); 
const resetButton = document.querySelector("button");
resetButton.addEventListener("click", reset);
let headerList = [];
let paraList = [];

let company = `{
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [ {
        "firstName": "Sam",
        "department": "Tech",
        "designation": "Manager",
        "salary": 40000,
        "raiseEligible": true,
        "wfh": true
    },
    {
        "firstName": "Mary",
        "department": "Finance",
        "designation": "Trainee",
        "salary": 18500,
        "raiseEligible": true,
        "wfh": false
    },
    {
        "firstName": "Bill",
        "department": "Hr",
        "designation": "Executive",
        "salary": 21200,
        "raiseEligible": false,
        "wfh": false
    },
    {
        "firstName": "Anna",
        "department": "Tech",
        "designation": "Executive",
        "salary": 25600,
        "raiseEligible": false,
        "wfh": true
    }
    ]
}`


//Does the math for question 5
function giveRaise(answerKey) {
    for (let int = 0; int <= 3; int++) {
        let rE = JSON.parse(company).employees[int].raiseEligible;
        let salary = JSON.parse(company).employees[int].salary;
        if (rE == true) {
            salary = salary * 1.10;
            rE = false;
        }
        addParagraph(salary, answerKey);
        addParagraph(rE, " ");

    }
}

//resets the page and prompts the user again for another question request
function reset() {
    const clearP = document.getElementById("answer");
    clearP.textContent = "";
    header.appendChild(clearP);

    const clearSubtitle = document.getElementById("subtitle");
    clearSubtitle.textContent = "";
    header.appendChild(clearSubtitle);

    askQuestion();
}

//Adds info the website so you don't need to open the console
function addParagraph(question, number) {
    if (number != " ") {
        const subtitle = document.createElement("h1");
        subtitle.setAttribute("id", "subtitle");
        subtitle.textContent = `Question ${number}`;
        headerList.append = subtitle;
        header.appendChild(subtitle);
        }  

    const newP = document.createElement("p");
    newP.setAttribute("id", "answer");
    newP.textContent = JSON.stringify(question);
    paraList.append = newP;
    header.appendChild(newP);

    console.log(`Question ${number}`);
    console.log(question);
}

//Prompts the user for which Question they would like the answer to
function askQuestion() {
    let answerKey = prompt("Enter the number for the question you would like the answer to");
       switch(answerKey) {
        case "1":
            addParagraph(JSON.parse(company).employees.slice(0, -1), answerKey);
            break;
        case "2":
            addParagraph(JSON.parse(company), answerKey);
            break;
        case "3":
            addParagraph(JSON.parse(company).employees.slice(-1), answerKey);
            break;
        case "4":
            addParagraph(JSON.parse(company).employees[0].salary +
                        JSON.parse(company).employees[1].salary +
                        JSON.parse(company).employees[2].salary +
                        JSON.parse(company).employees[3].salary +
                        " dollars a year total",
                        answerKey);
            break;
        case "5":
            giveRaise(answerKey);
            break;
        case "6":
            for (let int = 0; int <= JSON.parse(company).employees.length; int++) {
                let workFromHome = JSON.parse(company).employees[int].wfh;
                addParagraph(workFromHome, answerKey);
            }
            break;
       }
}

askQuestion();