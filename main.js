import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);

controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
controls.dampingFactor = 0.005;



const geometry = new THREE.TorusKnotGeometry( 5, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );
material.wireframeLinewidth = 10;
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 20;

function animate( time ) {

renderer.setSize( window.innerWidth, window.innerHeight );

  cube.rotation.x = time / 4000;
  cube.rotation.y = time / 2000;

controls.update();


  renderer.render( scene, camera );

}