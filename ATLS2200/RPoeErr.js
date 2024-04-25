const increase = document.querySelector(".increase-volume-button");
const decrease = document.querySelector(".decrease-volume-button");
const volume = document.querySelector(".volume-level");

increase.addEventListener("click", function() {
    let vol = volume.innerText
    vol = parseInt(vol);
    vol+=10
    volume.innerText = vol
});

decrease.addEventListener("click", function() {
    let vol = volume.innerText
    vol = parseInt(vol);
    vol-=10
    volume.innerText = vol
});

function animate() {

    increase.style.left += 0.0001;

    requestAnimationFrame(animate);
}

animate();
