import * as THREE from '../node_modules/three/'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.AmbientLight( 0x00FFFF, 1 ); // soft white light
scene.add( light );

const mat =  new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mat2 =  new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const mat3 = new THREE.MeshPhongMaterial();
let v1 = new THREE.Vector3(0, 0, 0);
let v2 = new THREE.Vector3(1, 0, 0);
let v3 = new THREE.Vector3(0.5, Math.sin(60*(Math.PI/180)) , 0);

const geo = new THREE.BufferGeometry().setFromPoints([v1, v2, v3]);
const dice = new THREE.Mesh(geo, mat);
const dice2 = new THREE.Mesh(geo, mat3);

scene.add(dice);
scene.add(dice2);
dice2.position.x += 3;

camera.position.z = 5;

function createMat() {

}

function createGeo() {

}

function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

}
animate();