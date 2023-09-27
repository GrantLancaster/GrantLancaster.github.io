const catFact = fetch("https://meowfacts.herokuapp.com/?count=3")
.then ((response) => {return response.json()})
.then ((jsonData) => {console.log(jsonData)});

fetch("https://api.spotify.com"), {
    type: "GET",
    header: "Content-Type: application/x-www-form-urlencoded",
    data: "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"


}
