import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial();
const cubes = []
let xPos = -5;
for (let i=0; i<10; i++) {
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = xPos+i;
    cubes.push(cube)
    scene.add( cube );

}


camera.position.z = 10;

function animate() {
    for (let i=0; i<cubes.length; i++) {
        cubes[i].rotation.x += 0.01;
        cubes[i].rotation.y += 0.01;
    }


	renderer.render( scene, camera );

}