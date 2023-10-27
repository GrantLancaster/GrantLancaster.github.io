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
loader.load('models/test.gltf', process);
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
const Plane = new THREE.PlaneGeometry(6, 6);
const SphereGeo = new THREE.SphereGeometry(0.1);
/*-----------------------------------------*/



/*------ Mesh Initialization Setup --------*/
const Sphere = new THREE.Mesh(SphereGeo, material2);
const newPlane = new THREE.Mesh(Plane, material3);

let bigCube = new THREE.Object3D();
let lilCube = new THREE.Object3D();
let models = [bigCube, lilCube];
/*-----------------------------------------*/



/*------------ Orbit Controls -------------*/
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();
/*-----------------------------------------*/


function render() {
	renderer.render(scene, camera);
	models[1].rotation.y += 0.01;
	requestAnimationFrame(render);
}

function setup() {
	scene.add(light);
	scene.add(Sphere);
	scene.add(newPlane);

	light.position.set(1, 2, 4);
	newPlane.position.set(0, 0, -3);
	console.log(models);
	render();
}

function process(gltf) {
	let newModel;
	newModel = gltf.scene;
	models.push(newModel);
	scene.add(newModel);
}
setup();
