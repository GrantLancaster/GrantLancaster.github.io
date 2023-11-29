# Project 1: Impossible Cube/Non-euclidian geometry exploration

## Proposal
This project will be an exploration/presentation of non-euclidian geometry, specifically focusing on an 'impossible cube'. The imposible cube is an open sided cube that shows something different on the inside when looking through the different faces of the cube. My inspiration for this revolves around non-euclidian geomtries and how they seem to break what we see as reality. An example of non-euclidian space would be sphereical space, which, if we were to draw a straight vector in our euclidian space, would end up forming a circle in sphereical space. Think of standing on top of a mountain and looking out to the horizon. In the real world, our sight line ends, but in sphereical space, our sightline would go around the earth and we would see the back of our own heads (provided that there is nothing to obstruct our vision). This is inteded to be a method of exposing people to these other weird ways of seeing the world, so the audience would be whomever walks by (think of an installation kind of thing). Noting this, the program needs to be user friendly and intuitve to use. 

The whole process that this program will be using is the Three.js library, which allows one to render 3D-objects in a web browser, as well as manipulate things like shaders. Outside of some simple html and CSS, this whole project will be done using Three.js and some shaderlab. I have not used Three.js before so the documentation will be quite necessary. 

https://threejs.org/docs/#manual/en/introduction/Installation 
https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene 

Stencil Renderer: https://threejs.org/docs/#api/en/renderers/WebGLRenderer.stencil
Stencil Example w/ code: https://threejs.org/examples/?q=stencil#webgl_clipping_stencil 

Adapting this program to different screen sizes will take some exploring on how I want to do it exactly, but my initial thought about it is by changing the camera view angle. As the screen gets smaller, less of the backrgound will be visible. The cube will be kept center of the screen as it is most important, and how much the camera sees will have to be altered. This could be done just by changing the FoV of the camera, but That may create some unwanted tunneling.

### Goals:
1. I have a function, but very simple version of the cube that runs in the Unity engine. I hoping that I can use some of that and carry it over into Three.js. Still confirming what Three.js uses for it's shaders, but if it is shaderlab compatible, than the stencil buffer should be pretty managable.
2. The minimum viable project will have control functionality using touch on mobile screens, and the mouse on full-size computers. Each of the sides of the square will have some non-simple objects that can be seen through each of the sides. These objects will have some sort of interaction that can occur from the user, but nothing elaborate for the MVP
3. Stretch goals for this include changing the background of the scene depending on the side of the square that is being looked through. Making the interactions on each of the objects more ellaborte, as well and connecting the interactions to other sides. Almost in a puzzle sense, having something that people cna try and figure out. Creating sounds and/or background music is another stretch goal that would come after all the necessary functionality is in place.

## Dev Log 10/19/23
I have gotten the code to render a custom 3D model, as well as give me orbit controls so I can pan around the screen. Right now, the scene is an orange plane and the custom 3D model that I will probably use for the final impossible cube. What I'm trying to do now is to change the position of the uploaded 3D model, so it is more centered on the screen. One problem with that, is I do not know what units the lengths use in the 3D model. I'm hoping they're standardized, but if they're not, I'm gonna have some research todo. Here are some of the resources that I was using to get this done too:
Loading the 3D model: https://threejs.org/docs/#examples/en/loaders/GLTFLoader , https://threejs.org/docs/index.html#manual/en/introduction/Loading-3D-models , https://github.com/mrdoob/three.js/blob/master/examples/webgl_loader_gltf.html
Finding/using pre-installed addons: https://threejs.org/docs/#manual/en/introduction/Installation
Orbit Controls: https://threejs.org/docs/#examples/en/controls/OrbitControls , https://github.com/mrdoob/three.js/blob/master/examples/misc_controls_orbit.html
Free 3D Modeling Software: https://web.blockbench.net/ 
Vite glsl pluggin: https://www.npmjs.com/package/vite-plugin-glsl 

## Dev Log 10/30/23
- Managed to get the cube to have tranformations (move, rotate, scale)! In three.js, Object3D is deemed as a group, so you have ot manipulate it a little differently.
- Got all planes in place to be able to apply the stencil buffers to them. 
- All planes are grouped with the cube, so transforming the cube, also changes the planes. 
This doesn't seem like much, but it has tekend forever to ge the transformations working the way I want them too.
#### Resources:
- Matrix transformations for changing position, direction, scaling, etc. https://www.opengl-tutorial.org/beginners-tutorials/tutorial-3-matrices/
- Example code for moving Object3D around in the scene. https://plnkr.co/edit/92gBm8F4oClpnRkbHL7x?p=preview&preview 

## Dev Log 10/31/23

#### Resources:
- More Stencil code examples: https://codepen.io/strangerintheq/pen/yLNRwQY 
- Exceptionally helpful Video: https://www.youtube.com/watch?v=X93GxW84t84 

## Dev Log 11/6/23

#### Resources:
- Very helpful for Async stuff: https://discoverthreejs.com/book/first-steps/load-models/#:~:text=To%20load%20glTF%20files%2C%20first,this%20file%20in%20the%20editor. 

### Reflection:
This was assignment was tough purely because three.js can be pretty complex and hard to manipulate. A lot of the creative design was present from another project I was working on in Unity. I wasn't able to re-use assets from that project, but I could reuse the ideaology and planning that went into it. Making some of the assets is was very time consuming because I had to figure out what I wanted it to look like, as well as how to build it in blockbench without pulling all of my hair out. Modeling software can be quite annoying. 
From the technical side, it was pretty straight forward from what I had been making in Unity. The biggest technical things for this were loading custom models and controlling when they are loaded, assigning the custom models the stencil buffer reference values that they needed, and setting up the movement functinality. 
I was not able to hit all of the goals for this project that I had set before. Some of the reasons for this were was making custom models takes a long time, as well as running into some jankiness when it came to rendering the custom models. There was a lot of retooling to try and get the loader to do what I wanted, when I wanted it. I was able to get past some of the model loading things, but not necessarily in the way that I wanted to. The initial solution was to load all custom models at once and have them added to the scene whenever they were done. This made for some interesting randomization for the project, but broke some of the creative standpoints that I wanted to go for. I did figure out that there is another way to load models, but of course I found it out after the project was due. I am going to continue work on this using the new methodology.
Once again, I have been humbled by my big eyes for the project, but limited other resources. One day I may learn to bite off less, but This project was not that project.


# Dev log Continued...

## Dev log 11/15/23
Current features:
- All six faces have a unique buffer value and will show only rendered objects in their frame
- four of the faces have custom scenarios that move are animated in some way. 
- The bottom button allows for the face to sized larger to recieve a bigger picture of a particular side. It will then shrink down when moving out of a certainly boundry of the selected face.

Where to go next:
- top and Bottom faces need custom animated scenes
- Custom background for each side of the cube. Think along the lines of having a different biome for each side of the cube.
    - Potentially use AI to proceduraly generate these background
        - Potential access pipline using ChatGPT and Shap-E: https://www.aporia.com/blog/generating-3d-game-assets-with-chatgpt-and-shap-e/ 

Ideas from others:
- have each face of the cube be a static scene, but use A.I. to bridge the gap and mesh the two scenes together.
- Have the cube rotate on it's own (potentially use one of the other buttons as a toggle for rotation)

## Dev Log 11/21/23
Started creating a module that connects to OpenAI's API to use ChatGPT. Module can call the API without an error, but I am having issues accessing the data that is given back as the response. Once the response can be captured, it will be sent into another AI generator that creates 3D objects. These objects will be changed into .gltf files, and then rendered into one of the faces of the impossible cube.