import * as THREE from 'three/build/three.module.js';
import { InteractionManager } from "three.interactive";
import anime from 'animejs/lib/anime.es.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );


let renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xECF0F1);
let doc = document.querySelector('.main');
doc.appendChild( renderer.domElement );

const interactionManager = new InteractionManager(
     renderer,
     camera,
     renderer.domElement
);


window.addEventListener('resize', function () {
     let width = window.innerWidth;
     let  height = window.innerHeight;
     renderer.setSize(width,height);
     camera.aspect = width / height;
     camera.updateProjectionMatrix();
});


let hlight = new THREE.AmbientLight (0x404040,4);
scene.add(hlight);


const planeGeo = new THREE.PlaneBufferGeometry(65, 65);
const planeMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/background.png'),
     transparent:true
});
planeMat.map.wrapT = THREE.RepeatWrapping;
planeMat.map.wrapS =  THREE.RepeatWrapping;
const Plane = new THREE.Mesh(planeGeo, planeMat);
scene.add(Plane);


const SofaGeo = new THREE.PlaneBufferGeometry(5, 7);
const SofaMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/sofa.png'),
     transparent:true,
});
const Sofa = new THREE.Mesh(SofaGeo, SofaMat);
Sofa.position.set(-6,-1.17,4.5);
Sofa.scale.multiplyScalar(0.7)
scene.add(Sofa);

const TableGeo = new THREE.PlaneBufferGeometry(4, 4);
const TableMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/table.png'),
     transparent:true,
});
const Table = new THREE.Mesh(TableGeo, TableMat);
Table.scale.multiplyScalar(0.8)
Table.position.set(-6,0.5,1.1);
scene.add(Table);


const GlobeGeo = new THREE.PlaneBufferGeometry(3, 4);
const GlobeMat = new THREE.MeshPhongMaterial({
     transparent:true,
     map:new  THREE.TextureLoader().load('../assets/img/globe.png'),
});
const Globe = new THREE.Mesh(GlobeGeo, GlobeMat);
Globe.scale.multiplyScalar(0.8)
Globe.position.set(-9.5,2,1.1);
scene.add(Globe);

const LogoGeo = new THREE.PlaneGeometry( 6,2.2,2 );
const LogoMat = new THREE.MeshBasicMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/logo.png'),
     transparent:true,
});

const LogoItem = new THREE.Mesh(LogoGeo, LogoMat);
LogoItem.position.set(-8.1,4.5,1.2);
scene.add(LogoItem);

const ContinueGeo = new THREE.PlaneBufferGeometry(5, 2);
const ContinueMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/btn-continue.png'),
     transparent:true,
});

const ContinueButton = new THREE.Mesh(ContinueGeo, ContinueMat );
scene.add(ContinueButton);
ContinueButton.scale.multiplyScalar(0.7);
ContinueButton.position.z = 4.5;
ContinueButton.position.y = -3.5;

const DecorPlantGeo = new THREE.PlaneBufferGeometry(2, 3);
const DecorPlantMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/plant.png'),
     transparent:true,
});
const PlantItem = new THREE.Mesh(DecorPlantGeo, DecorPlantMat);
PlantItem.position.z = 7.5;
PlantItem.position.y = 2.7;
PlantItem.position.x = -1.5;
PlantItem.scale.multiplyScalar(0.3);
scene.add(PlantItem);

const FlowerGeo = new THREE.PlaneBufferGeometry(2, 4);
const FlowerMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/flower-1.png'),
     transparent:true,
});
const Flower = new THREE.Mesh(FlowerGeo, FlowerMat);
Flower.position.x = 8;
Flower.position.z = 4.2;
Flower.position.y = -3.5;
Flower.scale.multiplyScalar(0.8)
scene.add(Flower);


const StairsGeo = new THREE.PlaneBufferGeometry(10, 10);
const StairsMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/old_stair.png'),
     transparent:true,
});
const OldStairs = new THREE.Mesh(StairsGeo, StairsMat);
OldStairs.position.z = 3.8;
OldStairs.position.x = 6.3;
OldStairs.scale.multiplyScalar(0.8)
scene.add(OldStairs);


const EnterGeometry = new THREE.PlaneBufferGeometry(2.5, 3);
const EnterMaterial = new THREE.MeshBasicMaterial( {
     map:new  THREE.TextureLoader().load('../assets/img/btn_hammer.png'),
     transparent:true
} );
const EnterButton = new THREE.Mesh( EnterGeometry, EnterMaterial );
EnterButton.position.z = 1.1;
EnterButton.scale.multiplyScalar(0.5);
EnterButton.position.set(7.5,0,3.9);
setTimeout(() => {
     scene.add( EnterButton );
     anime({
          targets: EnterButton.position,
          y: [2, 0],
          easing: 'easeOutBounce',
          loop: false,
          duration: 2000,
     });
},2000);


const ChoiceItemGeo = new THREE.CircleGeometry( 0.9, 32 );

const ChoiceItemArray = [];
const ActiveArray = [];
const ActiveColorArray = [];
const StairsArray = [];
const ButtonArray = [];

for (let i = 0; i < 3; i++) {
     const ChoiceItemMat = new THREE.MeshPhongMaterial({
          color: '#f8d6af',
          side: THREE.DoubleSide,
     });
     const ChoiceItem = new THREE.Mesh( ChoiceItemGeo, ChoiceItemMat);
     ChoiceItem.position.z = 4;
     ChoiceItemArray.push(ChoiceItem);
}
ChoiceItemArray[0].position.set(2,0,4);
ChoiceItemArray[1].position.set(4,1.5,4);
ChoiceItemArray[2].position.set(6.5,2,4);



EnterButton.addEventListener("click", () => {
     scene.add(ChoiceItemArray[0]);
     scene.add(ChoiceItemArray[1]);
     scene.add(ChoiceItemArray[2]);
     scene.add(ActiveArray[0]);
     scene.add(ActiveArray[1]);
     scene.add(ActiveArray[2]);
     scene.remove(EnterButton);
});


let imagePath = ['../assets/img/stair-1.png','../assets/img/stair-2.png','../assets/img/stair-3.png'];
let stairsImagePath = ['../assets/img/stairs-item-1.png','../assets/img/stairs-item-2.png','../assets/img/stairs-item-3.png'];
for (let i = 0; i < 3; i++) {
     const newStairsGeo =  new THREE.CircleGeometry( 0.9, 32 );
     const newStairsMat = new THREE.MeshPhongMaterial({
          map:new  THREE.TextureLoader().load(imagePath[i]),
          transparent:true
     });
     const newStairsButton = new THREE.Mesh(newStairsGeo, newStairsMat);
     newStairsButton.position.z = 4;
     newStairsButton.scale.multiplyScalar(0.9);
     ActiveArray.push(newStairsButton);

     const ActiveColorGeo = new THREE.CircleGeometry( 0.9, 32 );
     const ActiveColorMat = new THREE.MeshPhongMaterial({
          color:'#c0e51b',
     });
     const ActiveColorItem = new THREE.Mesh(ActiveColorGeo, ActiveColorMat);
     ActiveColorItem.scale.multiplyScalar(0.9);
     ActiveColorArray.push(ActiveColorItem);

     //
     const NewStairsGeo = new THREE.PlaneBufferGeometry(10, 10);
     const NewStairsMat = new THREE.MeshPhongMaterial({
          map:new  THREE.TextureLoader().load(stairsImagePath[i]),
          transparent:true,
     });
     const NewStairsItem = new THREE.Mesh(NewStairsGeo, NewStairsMat);
     NewStairsItem.position.z = 3.8;
     NewStairsItem.position.x = 6.3;
     NewStairsItem.scale.multiplyScalar(0.8);
     StairsArray.push(NewStairsItem);

     const ButtonOKGeo = new THREE.PlaneBufferGeometry(3, 2);
     const ButtonOKMat = new THREE.MeshPhongMaterial({
          map:new  THREE.TextureLoader().load('../assets/img/button-ok.png'),
          transparent:true
     });
     const ButtonOK = new THREE.Mesh(ButtonOKGeo, ButtonOKMat);
     ButtonOK.position.z = 4;
     ButtonOK.scale.multiplyScalar(0.6)
     ButtonArray.push(ButtonOK);
     interactionManager.add(ButtonArray[i]);
}
ActiveArray[0].position.set(2,0,4);
ActiveArray[1].position.set(4,1.5,4);
ActiveArray[2].position.set(6.5,2,4);
ActiveColorArray[0].position.set(2,0,4);
ActiveColorArray[1].position.set(4,1.5,4);
ActiveColorArray[2].position.set(6.5,2,4);
ButtonArray[0].position.set(2,-1.2,4);
ButtonArray[1].position.set(4,0.3,4);
ButtonArray[2].position.set(6.5,0.8,4);



interactionManager.add(EnterButton);

for (let i = 0; i < ActiveArray.length; i++) {
     interactionManager.add(ActiveArray[i]);
     ActiveArray[i].addEventListener("click", () => {
          for (let j = 0; j < ActiveColorArray.length ; j++) {
               scene.remove(ActiveColorArray[j]);
               scene.remove(StairsArray[j]);
               scene.remove(ButtonArray[j])
          }
          scene.add(ActiveColorArray[i])
          scene.remove(OldStairs);
          scene.add(StairsArray[i]);
          scene.add(ButtonArray[i]);
          anime({
               targets: StairsArray[i].position,
               y: [2, 0],
               easing: 'easeOutExpo',
               loop: false,
               duration: 2500,
          });
     });
}
let finish;
for (let i = 0; i < ButtonArray.length; i++) {
     ButtonArray[i].addEventListener("click", () => {
          finish = true;
     });
}
const curtainGroup = new THREE.Object3D();
const curtainGeo = new THREE.PlaneBufferGeometry(30, 30);
const curtainMat = new THREE.MeshPhongMaterial({
     color: 'black',
     opacity:0,
     transparent:true,
});
const curtain = new THREE.Mesh(curtainGeo, curtainMat);
curtain.position.z = 8;
curtainGroup.add(curtain);

const ScreenGeo = new THREE.PlaneBufferGeometry(10, 6);
const ScreenMat = new THREE.MeshPhongMaterial({
     map:new  THREE.TextureLoader().load('../assets/img/final-screen.png'),
     transparent:true
});
const FinalScreen = new THREE.Mesh(ScreenGeo, ScreenMat);
FinalScreen.position.z = 8;
FinalScreen.scale.multiplyScalar(0.5);



function setOpacity( obj, opacity ) {
     obj.children.forEach((child)=>{
          setOpacity( child, opacity );
     })
     if ( obj.material ) {
          obj.material.opacity = opacity ;
     }
}

camera.position.z = 15;

let ops = 0;
let curtainSpeed = 0.0090;
let deltaScale = 0;

const animate = function () {
     requestAnimationFrame( animate );

     if (finish) {
          scene.add(curtainGroup);
          setOpacity( curtainGroup, ops );
          ops += curtainSpeed;
          if (ops >= 0.5) {
               curtainSpeed = 0;
               scene.add(FinalScreen);
               finish = false;
          }
     }

     if (deltaScale <=80){
          ContinueButton.scale.x += 0.002;
          ContinueButton.scale.y += 0.002;
          deltaScale++;
     }
     if (deltaScale > 80){
          ContinueButton.scale.x -= 0.002;
          ContinueButton.scale.y -= 0.002;
          deltaScale++;
     }

     if (deltaScale > 160){
          deltaScale = 0;
     }

     interactionManager.update();
     renderer.render( scene, camera );
};

animate();
