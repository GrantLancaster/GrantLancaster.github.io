import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/*----- Camera, Scene, Renderer Setup -----*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 10;
/*-----------------------------------------*/



/*------------- Import Loader -------------*/
const loader = new GLTFLoader();

loader.load('./models/LargerCube.gltf', process);
/* Just Need to change the models that are linked for these
Six ofjects, one for each side of the cube */
loader.load('./models/test.gltf', processForm);
loader.load('./models/test.gltf', processForm);
loader.load('./models/test.gltf', processForm);
loader.load('./models/test.gltf', processForm);
loader.load('./models/test.gltf', processForm);
loader.load('./models/test.gltf', processForm);
/*-----------------------------------------*/



/*------------ Materials Setup ------------*/
function createMat(isForObject, referenceNum, pColor, objColor ) {
	if (!isForObject) {
		const planeMaterial = new THREE.MeshPhongMaterial({color: pColor});
		planeMaterial.stencilWrite = true;
		planeMaterial.stencilRef = referenceNum;
		planeMaterial.stencilFunc = THREE.AlwaysStencilFunc;
		planeMaterial.stencilZPass = THREE.ReplaceStencilOp;
		planeMaterial.colorWrite = false;
		planeMaterial.depthWrite = false;
		return planeMaterial;
	}
	else {
		const objectMaterial = new THREE.MeshPhongMaterial({color: objColor});
		objectMaterial.stencilWrite = true;
		objectMaterial.stencilRef = referenceNum;
		objectMaterial.stencilFunc = THREE.EqualStencilFunc;
		return objectMaterial;
	}
}
const floorMat = new THREE.MeshPhongMaterial({color: "lightpink"});
/*-----------------------------------------*/



/*------------- Light Setup ---------------*/
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
/*-----------------------------------------*/



/*----------- Geometries Setup ------------*/
const planeWidth = 3;
const planeHeight = 3;
const depth = 3;
const Plane = new THREE.PlaneGeometry(planeWidth, planeHeight);
const floorPlane = new THREE.PlaneGeometry(100, 100);

let objRefNum = 1;
let indexNUm = 0;
let objects = [];
/*-----------------------------------------*/



/*------ Mesh Initialization Setup --------*/
const floor = new THREE.Mesh(floorPlane, floorMat);
const backPlane = new THREE.Mesh(Plane, createMat(false, 1, "white", "white"));
const frontPlane = new THREE.Mesh(Plane, createMat(false, 2, "white", "white"));
const leftPlane = new THREE.Mesh(Plane, createMat(false, 3, "white", "white"));
const rightPlane = new THREE.Mesh(Plane, createMat(false, 4, "white", "white"));
const topPlane = new THREE.Mesh(Plane, createMat(false, 5, "white", "white"));
const bottomPlane = new THREE.Mesh(Plane, createMat(false, 6, "white", "white"));

let impossibleCube = new THREE.Object3D();
for (let i = 1; i < 7; i++) {
	let object = new THREE.Object3D();
	objects.push(object);
}
/*-----------------------------------------*/



/*------------ Orbit Controls -------------*/
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
/*-----------------------------------------*/


function render() {
	renderer.render(scene, camera);
	impossibleCube.rotateY(0.01);
	objects[0].rotateY(0.01);
	objects[1].rotateZ(0.5);
	objects[3].rotateX(0.05);
	objects[4].rotateZ(0.02);
	requestAnimationFrame(render);
}

function setup() {
	/*
	All the initial setup for the scene should go here. Things like lights, static geometries,
	stencil planes, and helpers that are initialized, etc.
	*/
	impossibleCube.add(backPlane, frontPlane, leftPlane, rightPlane, topPlane, bottomPlane);

	scene.add(light);
	scene.add(floor)
	scene.add(impossibleCube);
	for (let i = 0; i < objects.length; i++) {
		scene.add(objects[i]);
	}

	light.position.set(2, 2, 4);
	impossibleCube.scale.set(2, 2, 2);

//Plane positions--------------------
	floor.position.set(0, -10, 0);
	backPlane.position.set(0, 0, -depth/2);
	frontPlane.position.set(0, 0, depth/2.1);
	leftPlane.position.set(-depth/2.1, 0, 0);
	rightPlane.position.set(depth/2.1, 0, 0);
	topPlane.position.set(0, depth/2, 0);
	bottomPlane.position.set(0, -depth/2.1, 0);
//Plane rotations---------------------
	floor.rotation.x = -Math.PI/2;
	backPlane.rotation.y = Math.PI;
	leftPlane.rotation.y = -Math.PI / 2;
	rightPlane.rotation.y = Math.PI / 2;
	topPlane.rotation.x = -Math.PI / 2;
	bottomPlane.rotation.x = Math.PI / 2;
	render();
}

function process(gltf) {
	/*
	This function processes all imported models. This is call when the 
	gltf loader is initiallized.
	*/
	gltf.scene.position.set(0, -planeHeight/2, 0);
	impossibleCube.add(gltf.scene);
}

function processForm(gltf) {
	// DO NOT CHANGE THE PARAMETERS IN THE FOR LOOP
	for (let i = 0; i < 7; i++) {
		gltf.scene.children[0].children[i].material.stencilWrite = true;
		gltf.scene.children[0].children[i].material.stencilRef = objRefNum;
		gltf.scene.children[0].children[i].material.stencilFunc = THREE.EqualStencilFunc;
	}
	objects[indexNUm].add(gltf.scene);
	objRefNum++;
	indexNUm++;
}

setup();
