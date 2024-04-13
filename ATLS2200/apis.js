


/*
async function getJsonWithFetch1() {

    try {
    const fetchData = await fetch("URL TO THE API YOU WANT TO USE", {"HEADERS, AUTHORIZATION, KEYS, ETC."});
    
    const jsonData = await fetchData.json();
    
    console.log(jsonData);
    }

    catch (error) {
        console.error("COULD NOT GET DATA FROM API")
    }
}*/


const monsters = "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";
const endpoint = "https://api.thecatapi.com/v1/images/search";

const body = document.querySelector("body");
const p = document.createElement("p");
const p2 = document.createElement("p");

p.textContent = "Name: " + Name
p2.textContent = "Location: " + location
body.innerHTML += p2.outerHTML;
// Name: Bokoblin


async function getJsonWithFetch(category) {

    try {
    const response = await fetch(category);
        const jsonData = await response.json();
        console.log(jsonData);
        
    }

    catch (error) {
        console.error("failed to fetch joke");

    }
}

getJsonWithFetch(monsters); 
getJsonWithFetch(endpoint);

