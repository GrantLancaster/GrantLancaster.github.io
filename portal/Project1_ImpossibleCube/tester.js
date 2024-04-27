import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/*----- Camera, Scene, Renderer Setup -----*/
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
let bottomButton = document.querySelector(".bottom");
let rightButton = document.querySelector(".right");
const vector = new THREE.Vector3();
let cameraPos;


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
};
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
wallMat.stencilWrite = true;
wallMat.stencilRef = 7;
wallMat.stencilFunc = THREE.AlwaysStencilFunc;
wallMat.stencilZPass = THREE.ReplaceStencilOp;

console.log(wallPlane);
/*-----------------------------------------*/


/*------ Mesh Initialization Setup --------*/
const floor = new THREE.Mesh(floorPlane, wallMat);
const wall = new THREE.Mesh(wallPlane, wallMat);
const wallL = new THREE.Mesh(wallPlane, wallMat);
const wallR = new THREE.Mesh(wallPlane, wallMat);
const wallBack = new THREE.Mesh(wallPlane, wallMat);
const roof = new THREE.Mesh(floorPlane, wallMat);

const backPlane = new THREE.Mesh(Plane, createMat(false, 4, "white", "white"));
const frontPlane = new THREE.Mesh(Plane, createMat(false, 1, "white", "white"));
const leftPlane = new THREE.Mesh(Plane, createMat(false, 2, "white", "white"));
const rightPlane = new THREE.Mesh(Plane, createMat(false, 3, "white", "white"));
const topPlane = new THREE.Mesh(Plane, createMat(false, 5, "white", "white"));
const bottomPlane = new THREE.Mesh(Plane, createMat(false, 6, "white", "white"));


const rings = [];
const blocks = [];
const triangles = [];
const hexagons = [];
const diamonds = [];
const bars = [[], [], []]; // Horizontal, Vertical, Front-back
const cubes = [];
const skybox = ["models/SkyBoxBeach.gltf", "models/SkyBoxForest.gltf", "models/SkyBoxOcean.gltf", "models/SkyBoxSpaceCity.gltf"];
/*-----------------------------------------*/

let impossibleCube, block, planet;
let whichPlane = "none";
let toggleString;
let sizing = false;
const dif = 0.1;
const buffDist = 0.05
let direction = 1;
let factor = 1;
let currentArrow;

/*------------ Controls -------------*/
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
bottomButton.addEventListener("click", ()=> {checkCameraPosition()});
rightButton.addEventListener("click", () => {autoRotate(true)});
document.addEventListener("keydown", (e) => {currentArrow = e.key});

/*-----------------------------------------*/
function setup() {
    scene.add(frontPlane);
	scene.add(leftPlane);
	scene.add(rightPlane);
	scene.add(backPlane);
	scene.add(topPlane);
	scene.add(bottomPlane);

	// scene.add(wall);
	// scene.add(wallL);
	// scene.add(wallR);
	// scene.add(wallBack);
	// scene.add(floor);
	// scene.add(roof);

    frontPlane.position.set(0,0,2.90);
	backPlane.position.set(0, 0, -2.90), backPlane.rotation.set(0, Math.PI, 0);
	leftPlane.position.set(-2.90, 0, 0), leftPlane.rotation.set(0, -Math.PI/2, 0);
	rightPlane.position.set(2.90, 0, 0), rightPlane.rotation.set(0, Math.PI/2, 0);
	topPlane.position.set(0, 2.90, 0), topPlane.rotation.set(-Math.PI/2, 0, 0);
	bottomPlane.position.set(0, -2.90, 0), bottomPlane.rotation.set(Math.PI/2, 0, 0);

	wallL.position.set(-25, 0, 0), wallL.rotation.set(0, Math.PI/2, 0);
	wallR.position.set(25, 0, 0), wallR.rotation.set(0, -Math.PI/2, 0);
	wall.position.set(0, 0, -25);
	floor.position.set(0, -25, 0), floor.rotation.set(-Math.PI/2, 0, 0);
	roof.position.set(0, 25, 0), roof.rotation.set(Math.PI/2, 0, 0);
	wallBack.position.set(0, 0, 25), wallBack.rotation.set(Math.PI, 0, 0);

	camera.add(light);
	scene.add(camera);
	//light.position.set(10, 0, 4);
    
    build();
};

async function build() {
	impossibleCube = await loadModel("./models/cubeFrame.gltf", false, 0);
	await Promise.all([
		loadFrontFace(), 
		loadLeftFace(), 
		loadRightFace(),
		loadBackFace(),
		loadTopFace(),
		loadBottomFace(),
		loadSkyBox()
	]);
	
	scene.add(impossibleCube);
	impossibleCube.scale.set(2,2,2);

    render();
};
function render() {
	renderer.render(scene, camera);
	animateFrontFace();
	animateBackFace();
	animateLeftFace();
	animateRightFace();
	animateTopFace();
	animateBottomFace();

	expandPlane(whichPlane, toggleString);
	//console.log(whichPlane);

	requestAnimationFrame(render);
};

async function loadModel(path, needStencil, refNum) {
	const loader = new GLTFLoader();
	const data = await loader.loadAsync(path);
    const object = data.scene.children[0];
	if (needStencil) {
			if (object.children[0].children.length !== 0) {
				object.children[0].children[0].material.stencilWrite = true;
				object.children[0].children[0].material.stencilRef = refNum;
				object.children[0].children[0].material.stencilFunc = THREE.EqualStencilFunc;

				object.children[2].children[0].material.stencilWrite = true;
				object.children[2].children[2].material.stencilRef = refNum;
				object.children[2].children[2].material.stencilFunc = THREE.EqualStencilFunc;
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
};

function autoRotate(showCube) {
	if (showCube) {
		return
	} else if (!showCube) {
		scene.remove(impossibleCube);
	}
};

function checkCameraPosition() {
	cameraPos = camera.getWorldDirection(vector);
	console.log(cameraPos);
	
	if (cameraPos.z > (-1-dif) && cameraPos.z < (-1+dif)) {
		whichPlane = frontPlane;
		toggleString = "front";
		sizing = true;
	}else if (cameraPos.z > (1-dif) && cameraPos.z < (1+dif)) {
		whichPlane = backPlane;
		toggleString = "back";			
		sizing = true;
	}else if (cameraPos.x > (-1-dif) && cameraPos.x < (-1+dif)) {
		whichPlane = rightPlane;
		toggleString = "right";
		sizing = true;
	}else if (cameraPos.x > (1-dif) && cameraPos.x < (1+dif)) {
		whichPlane = leftPlane;
		toggleString = "left";
		sizing = true;
	}else if (cameraPos.y > (-1-dif) && cameraPos.y < (-1+dif)) {
		whichPlane = topPlane;
		toggleString = "top";
		sizing = true;
	}else if (cameraPos.y > (1-dif) && cameraPos.y < (1+dif)) {
		whichPlane = bottomPlane;
		toggleString = "bottom";
		sizing = true;
	}
};
function expandPlane(Plane, toggleString) {
	if(Plane == "none") {return};
	cameraPos = camera.getWorldDirection(vector);
	if (sizing == true) {
		if (Plane.scale.x <= 2 && Plane.scale.y <= 2) {
			Plane.scale.x +=0.01;
			Plane.scale.y +=0.01;
			console.log(Plane.scale.x);
			console.log("conditional flag");
			console.log(Plane);
		} else {sizing = false}
	}else if (toggleString == "front") {
		if (cameraPos.z < (-1-buffDist) || cameraPos.z > (-1+buffDist)) {
			if(Plane.scale.x >= 1 && Plane.scale.y >= 1) {
			Plane.scale.x -= 0.05;
			Plane.scale.y -= 0.05;
			}
		}
	}else if (toggleString == "back") {
		if (cameraPos.z < (1-buffDist) || cameraPos.z > (1+buffDist)) {
			if(Plane.scale.x >= 1 && Plane.scale.y >= 1) {
			Plane.scale.x -= 0.05;
			Plane.scale.y -= 0.05;
			}
		}
	}else if (toggleString == "right") {
		if (cameraPos.x < (-1-buffDist) || cameraPos.x > (-1+buffDist)) {
			if(Plane.scale.x >= 1 && Plane.scale.y >= 1) {
			Plane.scale.x -= 0.05;
			Plane.scale.y -= 0.05;
			}
		}
	}else if (toggleString == "left") {
		if (cameraPos.x < (1-buffDist) || cameraPos.x > (1+buffDist)) {
			if(Plane.scale.x >= 1 && Plane.scale.y >= 1) {
			Plane.scale.x -= 0.05;
			Plane.scale.y -= 0.05;
			}
		}
	}else if (toggleString == "top") {
		if (cameraPos.y < (-1-buffDist) || cameraPos.y > (-1+buffDist)) {
			if(Plane.scale.x >= 1 && Plane.scale.y >= 1) {
			Plane.scale.x -= 0.05;
			Plane.scale.y -= 0.05;
			}
		}
	}else if (toggleString == "bottom") {
		if (cameraPos.y < (1-buffDist) || cameraPos.y > (1+buffDist)) {
			if(Plane.scale.x >= 1 && Plane.scale.y >= 1) {
			Plane.scale.x -= 0.05;
			Plane.scale.y -= 0.05;
			}
		}
	}
};

async function loadbackground() {
	planet = await loadModel("models/lilPineTreePlanet.gltf", true, 1);
	scene.add(planet);
	planet.position.z = -5;
	console.log (planet);
};

async function loadSkyBox() {
	for (let i = 0; i < skybox.length; i++ ) {
		let env
		if (i == 1) {
			env = await loadModel(skybox[i], true, i+1);
		} else {
			env = await loadModel(skybox[i], true, i+1);
		}
		scene.add(env);
		env.scale.set(20,20,20);
	}
}

async function loadFrontFace() {
	block = await loadModel("models/filledCube.gltf", true, 1);
	scene.add(block);
	for (let j = 0; j < 3; j++) {
		if (j == 0) {
			for (let i = 0; i < 10; i++) {
				const lip = await loadModel("models/ring.gltf", true, 1);
				scene.add(lip);
				lip.scale.set(0+i, 0+i, 0+i);
				lip.rotation.z = Math.PI/2;
				lip.position.x = (-i/3)*i;
				rings.push(lip);
			}
		} else if (j == 1) {
			for (let i = 0; i < 10; i++) {
				const lip = await loadModel("models/ring.gltf", true, 1);
				scene.add(lip);
				lip.scale.set(0+i, 0+i, 0+i);
				lip.rotation.z = -Math.PI/2;
				lip.position.x = (i/3)*i;
				rings.push(lip);
			}
		} else {
			for (let i = 0; i < 10; i++) {
				const lip = await loadModel("models/ring.gltf", true, 1);
				scene.add(lip);
				lip.scale.set(2+i, 2+i, 2+i);
				lip.rotation.x = Math.PI/2;
				lip.position.z = (-i/3)*i;
				rings.push(lip);
			}
		}
	}
};
function animateFrontFace() {
	let x = 0;
	for (let item = 0; item < rings.length; item++) {
		rings[item].rotateX(0.01+x), rings[item].rotateY(-0.01+x);
		x = x + 0.001;
	}
};

async function loadBackFace() {
	for (let i = 0; i < 20; i++) {
		const frame = await loadModel("models/triangle.gltf", true, 4);
		frame.scale.set(6-i/4, 6-i/4, 1);
		frame.position.set(0, 0, -2.5);
		scene.add(frame);
		triangles.push(frame);
	}
};
function animateBackFace() {
	for (let i = 0; i < triangles.length; i++) {
		triangles[i].position.z += i /300 * direction;
		triangles[i].rotation.z += i/1000 * direction;
		if(triangles[triangles.length-1].position.z > 25) {
			direction = -4;
		} else if(triangles[triangles.length-1].position.z < -8.5) {
			direction = 1;
		}	
	}
};

async function loadLeftFace() {
	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			const block = await loadModel("models/filledCube.gltf", true, 2);
			block.position.set((i)-1.5, -1, -2 + j);
			blocks.push(block);
			scene.add(block);
		}
	}
};
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
};

async function loadRightFace() {
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 4; j++) {
			const bar = await loadModel("models/test.gltf", true, 3);
			bars[i].push(bar);
			scene.add(bar);
		}
	}
};
function animateRightFace() {
	for (let i = 0; i < bars.length; i++) {
		for (let j = 0; j < bars[i].length; j++) {
			let factor
			let inverse = Math.floor(Math.random()*4);
			if (inverse % 2 == 0) {factor = -1}
			else {factor = 1}
			let randX = Math.floor(Math.random()*3*factor);
			let randY = Math.floor(Math.random()*3*factor);
			let randZ = Math.floor(Math.random()*3*factor);
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
};

async function loadTopFace() {
	const diamond = await loadModel("models/diamond.gltf", true, 5);
	for (let i = 0; i < 8; i++) {
		const hexagon = await loadModel("models/hexagon.gltf", true, 5);
		hexagon.scale.set(5, 5, 5);
		hexagons.push(hexagon);
		diamond.add(hexagon);
	}
	diamond.scale.set(2, 2, 2);
	diamonds.push(diamond);
	scene.add(diamond);
};
function animateTopFace() {
	const distance = Math.sin((diamonds[0].rotation.y*50)*Math.PI/180);
	diamonds[0].rotation.x += 0.01;
	diamonds[0].rotation.y -= 0.01;
	//console.log(distance);
	for (let i = 0; i < hexagons.length; i++) {
		if (i % 2 == 0) {factor = -1}
		else if (i % 2 !== 0) {factor = 1};
		hexagons[i].scale.set(2-(i*0.25), 2-(i*0.25), 2-(i*0.25));
		hexagons[i].position.set(0, 0, distance*i*2*factor);
		hexagons[i].rotation.set(-diamonds[0].rotation.x, 0, 0);
	}

};

async function loadBottomFace() {
	planet = await loadModel("models/lilPineTreePlanet.gltf", true, 6);
	planet.scale.set(2,2,2);

	planet.children[1].children[0].material.stencilWrite = true;
	planet.children[1].children[0].material.stencilRef = 6;
	planet.children[1].children[0].material.stencilFunc = THREE.EqualStencilFunc;

	planet.children[1].children[1].material.stencilWrite = true;
	planet.children[1].children[1].material.stencilRef = 6;
	planet.children[1].children[1].material.stencilFunc = THREE.EqualStencilFunc;

	scene.add(planet);
};
function animateBottomFace() {
	planet.rotation.x += 0.005;
	planet.rotation.z += 0.005;
	planet.rotation.y -= 0.005;
};
setup();
