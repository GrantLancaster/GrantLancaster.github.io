


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



async function getJsonWithFetch() {

    try {
    const response = await fetch("https://techy-api.vercel.app/api/json");

        const jsonData = await response.json();

        console.log(jsonData);
    }

    catch (error) {
        console.error("failed to fetch joke");

    }
}

getJsonWithFetch();