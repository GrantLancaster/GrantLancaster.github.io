import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
const loader = new THREE.TextureLoader();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.DirectionalLight( 0x404040, 1 ); // soft white light
scene.add( light );
light.position.set(0,0,5);

const loader2 = new THREE.ImageLoader();

// load a image resource
loader2.load(
	// resource URL
	'./testimages/bluSpiral.png',

	// onLoad callback
	function ( image ) {
		// use the image, e.g. draw part of it on a canvas
		const canvas = document.createElement( 'canvas' );
		const context = canvas.getContext( '2d' );
		context.drawImage( image, 100, 100 );
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function () {
		console.error( 'An error happened.' );
	}
);

const plane = new THREE.BoxGeometry(3,3,3);
const material = new THREE.MeshStandardMaterial({color: 0xffA500});
const texture = loader.load("../img/logo.png");
texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
const material2 = new THREE.MeshStandardMaterial({color: 0xffffff, map: texture});
const shape = new THREE.Mesh(plane, material2);
scene.add(shape);
console.log(shape);
console.log(material2);

shape.position.set(0,0,0);
camera.position.z = 10;


function animate() {
	requestAnimationFrame( animate );
    shape.rotation.z +=0.01;
	shape.rotation.x += 0.01;
	renderer.render( scene, camera );
}

animate();