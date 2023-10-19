# Project 1: Impossible Cube/Non-euclidian geometry exploration

## Proposal
This project will be an exploration/presentation of non-euclidian geometry, specifically focusing on an 'impossible cube'. The imposible cube is an open sided cube that shows something different on the inside when looking through the different faces of the cube. My inspiration for this revolves around non-euclidian geomtries and how they seem to break what we see as reality. An example of non-euclidian space would be sphereical space, which, if we were to draw a straight vector in our euclidian space, would end up forming a circle in sphereical space. Think of standing on top of a mountain and looking out to the horizon. In the real world, our sight line ends, but in sphereical space, our sightline would go around the earth and we would see the back of our own heads (provided that there is nothing to obstruct our vision). This is inteded to be a method of exposing people to these other weird ways of seeing the world, so the audience would be whomever walks by (think of an installation kind of thing). Noting this, the program needs to be user friendly and intuitve to use. 

The whole process that this program will be using is the Three.js library, which allows one to render 3D-objects in a web browser, as well as manipulate things like shaders. Outside of some simple html and CSS, this whole project will be done using Three.js and some shaderlab. I have not used Three.js before so the documentation will be quite necessary. 

https://threejs.org/docs/#manual/en/introduction/Installation 
https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene 

Stencil Renderer: https://threejs.org/docs/#api/en/renderers/WebGLRenderer.stencil
Stencil Example w/ code: https://threejs.org/examples/?q=stencil#webgl_clipping_stencil 

Adapting this program to different screen sizes will take some exploring on how I want to do it exactly, but my initial thought about it is by changing the camera view angle. As the screen gets smaller, less of the backrgound will be visible. The cube will be kept center of the screen as it is most important, and how much the camera sees will have to be altered. This could be done just by changing the FoV of the camera, but That may create some unwanted tunneling.

##### Design Prototype
[insert link here]

### Goals:
1. I have a function, but very simple version of the cube that runs in the Unity engine. I hoping that I can use some of that and carry it over into Three.js. Still confirming what Three.js uses for it's shaders, but if it is shaderlab compatible, than the stencil buffer should be pretty managable.
2. The minimum viable project will have control functionality using touch on mobile screens, and the mouse on full-size computers. Each of the sides of the square will have some non-simple objects that can be seen through each of the sides. These objects will have some sort of interaction that can occur from the user, but nothing elaborate for the MVP
3. Stretch goals for this include changing the background of the scene depending on the side of the square that is being looked through. Making the interactions on each of the objects more ellaborte, as well and connecting the interactions to other sides. Almost in a puzzle sense, having something that people cna try and figure out. Creating sounds and/or background music is another stretch goal that would come after all the necessary functionality is in place.

## Dev Log 10/19/23
I have gotten the code to render a custom 3D model, as well as give me orbit controls so I can pan around the screen. Right now, the scene is an orange plane and the custom 3D model that I will probably use for the final impossible cube. What I'm trying to do now is to change the position of the uploaded 3D model, so it is more centered on the screen. One problem with that, is I do not know what units the lengths use in the 3D model. I'm hoping they're standardized, but if they're not, I'm gonna have some research todo. Here are some of the resources that I was using to get this done too:
Loading the 3D model: https://threejs.org/docs/#examples/en/loaders/GLTFLoader , https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models , https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html
Finding/using pre-installed addons: https://threejs.org/docs/#manual/en/introduction/Installation
Orbit Controls: https://threejs.org/docs/#examples/en/controls/OrbitControls , https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_orbit.html

