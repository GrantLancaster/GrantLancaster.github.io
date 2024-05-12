/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */


let json =   {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "edge",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.3,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 200,
      "color": "#ffffff",
      "opacity": 0.1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "bottom",
      "random": true,
      "straight": true,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 0.1,
        "speed": 3
      },
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

particlesJS('particles-js', json);

/*--------------------------------------------*/


const A = document.querySelector("#Abutton");
const B = document.querySelector("#Bbutton");
const X = document.querySelector("#Xbutton");
const Y = document.querySelector("#Ybutton");

function reset() {
  json.interactivity.events.onhover.enable = false;
  json.particles.move.direction = "bottom";
  json.particles.move.straight = true;
  json.particles.move.attract.enable = false;
  json.particles.size.anim.enable = false;
  particlesJS('particles-js', json);
}
function switchBubble() {
  json.interactivity.events.onhover.enable = true;
  json.interactivity.events.onhover.mode = "bubble";
  particlesJS('particles-js', json);
}
function chaos() {
  json.particles.move.straight = false;
  json.particles.move.direction = "bottom-left";
  json.particles.move.attract.enable = true;
  json.particles.size.anim.enable = true;
  json.interactivity.events.onhover.enable = true;
  json.interactivity.events.onhover.mode = "repulse";
  particlesJS('particles-js', json);
}

A.addEventListener("click", reset);
B.addEventListener("click", switchBubble);
X.addEventListener("click", chaos);
//Y.addEventListener("click", buttonEvent);

