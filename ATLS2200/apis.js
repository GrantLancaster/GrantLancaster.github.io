


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


const endpoint = "https://api.thecatapi.com/v1/images/search";

async function getJsonWithFetch(category) {

    try {
    const response = await fetch(category);
        const jsonData = await response.json();
        console.log(jsonData);

        //  MAKE SURE THAT I AM GRABBING THE RIGHT THING
        console.log(jsonData[0]["url"]);

        //  CAPTURE THE IMAGE TAG IN THE HTML FILE
        const imageTag = document.querySelector("img");

        //  UPDATE THE SRC ATTRIBUTE WITH THE URL I GRABBED
        imageTag.src = jsonData[0]["url"];
        //  ADD AN ALT ATTRIBUTE SO IT DOESNT THROW AN ERROR
        imageTag.alt = "Picture of a cat";

        
    }

    catch (error) {
        console.error("failed to fetch joke");

    }
}

getJsonWithFetch(endpoint);

