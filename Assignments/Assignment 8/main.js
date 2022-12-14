const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let insertX = ["Jack Johnson", "Little Sister", "Krampus"];
let insertY = ["the Olive Garden", "Didney Worl!!!", "Hogwarts School of Witchraft and Wizardry"];
let insertZ = ["fistfaught a gorilla", "hardened into stone", "Waved and said Hello"];

let newStory = storyText;
let xItem = randomValueFromArray(insertX);
let yItem = randomValueFromArray(insertY);
let zItem = randomValueFromArray(insertZ);

newStory = newStory.replaceAll(":insertx:", xItem) .replace(":inserty:", yItem) .replace(":insertz:", zItem);

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stone";
    const temperature =  Math.round((94-32)*(5/9)) + " centrigrade";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 farenheit", temperature);
    
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}