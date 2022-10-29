async function populate() {

    const requestURL = "hr.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroes = await response.json();
  
    populateHeader(companyName);
    populateHeroes(compnayName);
  
  }
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: [ {
        firstName: "Sam:",
        deparment: "Tech",
        designation: "Manager",
        salary: 40000,
        raiseEligible: true
        },
    {   firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 18500,
        raiseEligible: true
        },
    {   firstName: "Bill",
        department: "Hr",
        designation: "Exectuve",
        salary: 21200,
        raiseEligible: false
        }
    ],
    people: function () {
        console.log(this.employees[0]);
    }
}

  
  