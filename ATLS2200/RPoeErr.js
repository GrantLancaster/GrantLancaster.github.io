const increase = document.querySelector(".increase-volume-button");
const decrease = document.querySelector(".decrease-volume-button");
const volume = document.querySelector(".volume-level");

let speed = volume.innerText/50 // We want the volume to control the speed
let direction = 1; // Controls the direction by making the speed either positive or negative

increase.addEventListener("click", function() {
    let vol = volume.innerText
    vol = parseInt(vol);
    vol+=10
    volume.innerText = vol
    speed = volume.innerText/50 // Update the speed everytime a button is clicked
});

decrease.addEventListener("click", function() {
    let vol = volume.innerText
    vol = parseInt(vol);
    vol-=10
    volume.innerText = vol
    speed = volume.innerText/50 // Update the speed everytime a button is slicked
});



let startPos = 1; // starting position of the button


function animate() {

    startPos += speed * direction; // increase the position by the speed multiplied by the direction
    let positionAsString = startPos.toString(); // Turn the number into a string so we can use it
    increase.style.left = positionAsString+"px"; // Set the left rule to be the updated position

        if ((parseInt(increase.style.left) > window.outerWidth)||(parseInt(increase.style.left) < 0)) { // Check and see if the box hits the edges of the screen
            if (direction == 1){ // Switch the direction if it goes outside the screen bounds
                direction = -1
            }else {
                direction = 1
            }
        }

    requestAnimationFrame(animate);
}

animate();
