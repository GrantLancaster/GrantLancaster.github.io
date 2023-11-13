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
const wallMat = new THREE.MeshNormalMaterial();
/*-----------------------------------------*/



/*------------- Light Setup ---------------*/
const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.DirectionalLight(color, intensity);
/*-----------------------------------------*/



/*----------- Geometries Setup ------------*/
const planeWidth = 6;
const planeHeight = 6;
const Plane = new THREE.PlaneGeometry(planeWidth, planeHeight);
const floorPlane = new THREE.PlaneGeometry(100, 100);
const wallPlane = new THREE.PlaneGeometry(100,100);
/*-----------------------------------------*/



/*------ Mesh Initialization Setup --------*/
const floor = new THREE.Mesh(floorPlane, floorMat);
const wall = new THREE.Mesh(wallPlane, wallMat);
const wallL = new THREE.Mesh(wallPlane, wallMat);
const wallR = new THREE.Mesh(wallPlane, wallMat);

const backPlane = new THREE.Mesh(Plane, createMat(false, 1, "white", "white"));
const frontPlane = new THREE.Mesh(Plane, createMat(false, 1, "white", "white"));
const leftPlane = new THREE.Mesh(Plane, createMat(false, 2, "white", "white"));
const rightPlane = new THREE.Mesh(Plane, createMat(false, 3, "white", "white"));
const topPlane = new THREE.Mesh(Plane, createMat(false, 5, "white", "white"));
const bottomPlane = new THREE.Mesh(Plane, createMat(false, 6, "white", "white"));


const rings = [];
const blocks = [];
const bars = [[], [], []] // Horizontal, Vertical, Front-back
/*-----------------------------------------*/

let impossibleCube, block;

/*------------ Controls -------------*/
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
/*-----------------------------------------*/

function setup() {
    scene.add(frontPlane);
	scene.add(leftPlane);
	scene.add(rightPlane);

    frontPlane.position.set(0,0,2.90);
	leftPlane.position.set(-2.90, 0, 0), leftPlane.rotation.set(0, -Math.PI/2, 0);
	rightPlane.position.set(2.90, 0, 0), rightPlane.rotation.set(0, Math.PI/2, 0);

	camera.add(light);
	scene.add(camera);
	light.position.set(10, 0, 4);
    
    build();
}

async function build() {
	impossibleCube = await loadModel("./models/cubeFrame.gltf", false, 0);
	await Promise.all([
		loadFrontFace(), 
		loadLeftFace(), 
		loadRightFace()
	]);
	

	scene.add(impossibleCube);

	impossibleCube.scale.set(2,2,2);
    render();
}

function render() {
	renderer.render(scene, camera);
	animateFrontFace();
	animateLeftFace();
	animateRightFace();

	requestAnimationFrame(render);
}

async function loadModel(path, needStencil, refNum) {
	const loader = new GLTFLoader();
	const data = await loader.loadAsync(path);
    const object = data.scene.children[0];
	if (needStencil) {
		if (object.children[0].children.length !== 0) {
			object.children[0].children[0].material.stencilWrite = true;
			object.children[0].children[0].material.stencilRef = refNum;
			object.children[0].children[0].material.stencilFunc = THREE.EqualStencilFunc;
		}
		else {
		object.children[0].material.stencilWrite = true;
		object.children[0].material.stencilRef = refNum;
		object.children[0].material.stencilFunc = THREE.EqualStencilFunc;
		}
		return object;
	}
	else {
		return object;
	}
}

async function loadFrontFace() {
	block = await loadModel("./models/filledCube.gltf", true, 1);
	scene.add(block);
	for (let j = 0; j < 3; j++) {
		if (j == 0) {
			for (let i = 0; i < 10; i++) {
				const lip = await loadModel("./models/ring.gltf", true, 1);
				scene.add(lip);
				lip.scale.set(0+i, 0+i, 0+i);
				lip.rotation.z = Math.PI/2;
				lip.position.x = (-i/3)*i;
				rings.push(lip);
			}
		} else if (j == 1) {
			for (let i = 0; i < 10; i++) {
				const lip = await loadModel("./models/ring.gltf", true, 1);
				scene.add(lip);
				lip.scale.set(0+i, 0+i, 0+i);
				lip.rotation.z = -Math.PI/2;
				lip.position.x = (i/3)*i;
				rings.push(lip);
			}
		} else {
			for (let i = 0; i < 10; i++) {
				const lip = await loadModel("./models/ring.gltf", true, 1);
				scene.add(lip);
				lip.scale.set(2+i, 2+i, 2+i);
				lip.rotation.x = Math.PI/2;
				lip.position.z = (-i/3)*i;
				rings.push(lip);
			}
		}
	}
}
function animateFrontFace() {
	let x = 0;
	for (let item = 0; item < rings.length; item++) {
		rings[item].rotateX(0.01+x), rings[item].rotateY(-0.01+x);
		x = x + 0.001;
	}
}

async function loadLeftFace() {
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			const block = await loadModel("./models/filledCube.gltf", true, 2);
			block.position.set((i)-1.5, -1, -2 + j);
			blocks.push(block);
			scene.add(block);
		}
	}
}
function animateLeftFace() {
	let int = Math.floor(Math.random()*4);
	let factor = Math.floor(Math.random() *10) / 3;
	let index = Math.floor(Math.random() *25);
	if (int % 2 != 0) {
		blocks[index].position.y = int * (-1);
		blocks[index].scale.set(factor, factor, factor);
	} else {
		blocks[index].position.y = int;
	}	
}

async function loadRightFace() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 4; j++) {
			const bar = await loadModel("./models/test.gltf", true, 3);
			bars[i].push(bar);
			scene.add(bar);
		}
	}
}
function animateRightFace() {
	for (let i = 0; i < bars.length; i++) {
		for (let j = 0; j < bars[i].length; j++) {
			let randX = Math.floor(Math.random()*6);
			let randY = Math.floor(Math.random()*6);
			let randZ = Math.floor(Math.random()*6);
			let randDist = Math.floor(Math.random()*15)+10;
			let speed = Math.floor(Math.random()*10)/20;
			bars[i][j].scale.set(1, 1, 10);
			if (i == 0) {
				if (bars[i][j].position.z >= randDist) {
					bars[i][j].position.set(randX, randY, -randDist);
				} else {
					bars[i][j].translateZ(speed);
				}
			}else if (i == 1) {
				bars[i][j].rotation.x = Math.PI/2;
				if (bars[i][j].position.y >= randDist) {
					bars[i][j].position.set(randX, -randDist, randZ);
				} else {
					bars[i][j].translateZ(-speed);
				}
			}else if (i == 2) {
				bars[i][j].rotation.y = Math.PI/2;
				if (bars[i][j].position.x <= -randDist) {
					bars[i][j].position.set(randDist, randY, randZ);
				} else {
					bars[i][j].translateZ(-speed);
				}
			}
		}
	}
}

setup();
