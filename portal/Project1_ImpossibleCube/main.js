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

loader.load('models/LargerCube.gltf', process);
//loader.load('models/test.gltf', process);
/*-----------------------------------------*/



/*------------ Materials Setup ------------*/
const material2 = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const material3 = new THREE.MeshBasicMaterial({color: 0x00AEFF, side: THREE.DoubleSide});
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
/*-----------------------------------------*/



/*------ Mesh Initialization Setup --------*/
const backPlane = new THREE.Mesh(Plane, material3);
const frontPlane = new THREE.Mesh(Plane, material3);
const leftPlane = new THREE.Mesh(Plane, material3);
const rightPlane = new THREE.Mesh(Plane, material3);
const topPlane = new THREE.Mesh(Plane, material3);
const bottomPlane = new THREE.Mesh(Plane, material3);

let impossibleCube = new THREE.Object3D();
/*-----------------------------------------*/



/*------------ Orbit Controls -------------*/
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
/*-----------------------------------------*/


function render() {
	renderer.render(scene, camera);
	impossibleCube.rotateY(0.01);
	//impossibleCube.updateMatrixWorld(); This will update the tranform, scale, and rotate matrix for the object
	requestAnimationFrame(render);
}

function setup() {
	/*
	All the initial setup for the scene should go here. Things like lights, static geometries,
	stencil planes, and helpers that are initialized, etc.
	*/
	impossibleCube.add(backPlane, frontPlane, leftPlane, rightPlane, topPlane, bottomPlane);

	scene.add(light);
	scene.add(impossibleCube);

	light.position.set(1, 2, 4);
	impossibleCube.scale.set(2, 2, 2);

//Plane positions--------------------
	backPlane.position.set(0, 0, -depth/2);
	frontPlane.position.set(0, 0, depth/2.1);
	leftPlane.position.set(-depth/2.1, 0, 0);
	rightPlane.position.set(depth/2.1, 0, 0);
	topPlane.position.set(0, depth/2, 0);
	bottomPlane.position.set(0, -depth/2.1, 0);
//Plane rotations---------------------
	leftPlane.rotation.y = Math.PI / 2;
	rightPlane.rotation.y = Math.PI / 2;
	topPlane.rotation.x = Math.PI / 2;
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
setup();
