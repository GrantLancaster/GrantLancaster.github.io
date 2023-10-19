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

const geometry = new THREE.BufferGeometry();
const verticies = new Float32Array([
	-1.0, -1.0,  -1.0, // v0
	 1.0, -1.0,  -1.0, // v1
	 1.0,  1.0,  -1.0, // v2

	 1.0,  1.0,  -1.0, // v3
	-1.0,  1.0,  -1.0, // v4
	-1.0, -1.0,  -1.0  // v5
]);

const NewPlane = new THREE.Vector3(-1, 0, 0);

geometry.setAttribute('position', new THREE.BufferAttribute(verticies, 3));
const material = new THREE.MeshBasicMaterial({color: 0xB84802, side: THREE.DoubleSide});
const material2 = new THREE.MeshBasicMaterial({color: 0xFFFFFF, side: THREE.DoubleSide});
/*--------*/
const controls = new OrbitControls( camera, renderer.domElement );
controls.addEventListener('change', render);
	controls.update();
/*-----------*/
const mesh = new THREE.Mesh(geometry, material);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader().setPath("../models/");
let meesh;
loader.load('test.gltf', function ( gltf ) {
	meesh = gltf.scene;
	scene.add(meesh);
	renderer.render(scene, camera);
})

camera.position.z = 2;

meesh.position.set(3, 3, 3);
light.position.set(-1, 2, 4);
scene.add(light);
scene.add(mesh);


function animate() {
    mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	renderer.render(scene, camera);

}
animate();