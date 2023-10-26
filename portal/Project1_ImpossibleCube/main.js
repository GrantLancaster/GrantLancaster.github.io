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
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);

const material2 = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
const material3 = new THREE.MeshBasicMaterial({color: 0x00AEFF, side: THREE.DoubleSide});
/*-----------------------------------------*/

/*----------- Geometries Setup ------------*/
const Plane = new THREE.PlaneGeometry(6, 6);
const SphereGeo = new THREE.SphereGeometry(0.1);
/*-----------------------------------------*/

/*------ Mesh Initialization Setup --------*/
const Sphere = new THREE.Mesh(SphereGeo, material2);
const newPlane = new THREE.Mesh(Plane, material3);

const model = new THREE.Object3D();
const smallCube = new THREE.Object3D();

let models = [model, smallCube];
/*-----------------------------------------*/

/*------------ Orbit Controls -------------*/
const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', render);
	controls.update();
/*-----------------------------------------*/

light.position.set(1, 2, 4);
newPlane.position.set(0, 0, -3);


function render() {
	renderer.render(scene, camera);
}

function animate() {
	scene.add(light);
	scene.add(Sphere);
	scene.add(newPlane);
	renderer.render(scene, camera);
}

function process(gltf) {
	for (let i = 0; i < models.length; i++) {
		gltf.scene.position.set(0, -3, 0);
		gltf.scene.scale.set(2, 2, 2);
		models[i].add(gltf.scene);
		scene.add(models[i]);
	}
	renderer.render(scene, camera);

}
animate();