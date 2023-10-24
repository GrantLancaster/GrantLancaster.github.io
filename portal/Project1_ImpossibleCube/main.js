import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function render() {
	renderer.render(scene, camera);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);

const Plane = new THREE.PlaneGeometry(6, 6);
const material3 = new THREE.MeshBasicMaterial({color: 0x00AEFF, side: THREE.DoubleSide});

const geometry = new THREE.BufferGeometry();
const verticies = new Float32Array([
	-1.0, -1.0,  -1.0, // v0
	 1.0, -1.0,  -1.0, // v1
	 1.0,  1.0,  -1.0, // v2

	 1.0,  1.0,  -1.0, // v3
	-1.0,  1.0,  -1.0, // v4
	-1.0, -1.0,  -1.0  // v5
]);


geometry.setAttribute('position', new THREE.BufferAttribute(verticies, 3));
const material = new THREE.MeshBasicMaterial({color: 0xB84802, side: THREE.DoubleSide});
const material2 = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
/*--------*/
const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', render);
	controls.update();
/*-----------*/
const mesh = new THREE.Mesh(geometry, material);
const newPlane = new THREE.Mesh(Plane, material3);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
const model = new THREE.Object3D();
loader.load('models/LargerCube.gltf', process);

camera.position.z = 10;

light.position.set(1, 2, 4);
scene.add(light);
scene.add(mesh);
scene.add(newPlane);
newPlane.position.z = 3.9;
newPlane.position.y = 3;


function animate() {
    mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	renderer.render(scene, camera);
}
function process(gltf) {
	gltf.scene.position.set(0, 0, 1);
	gltf.scene.scale.set(2, 2, 2);
	model.add(gltf.scene);
	scene.add(model);
}
animate();