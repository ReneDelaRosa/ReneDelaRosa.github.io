function Pieza(){
THREE.Object3D.call(this);
  this.piernaIzq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.piernaIzq.position.z=-2;
  this.piernaIzq.position.y=-2.5;
  this.piernaDer.position.z=2;
  this.piernaDer.position.y=-2.5;
  this.add(this.piernaIzq,this.piernaDer,cuerpo);
  cuerpo.position.y=2.5;
}

var pieza;
Pieza.prototype=new THREE.Object3D;

function setup(){
  escena=new THREE.Scene();
  pieza=new Pieza();
  escena.add(pieza);
  camara=new THREE.PerspectiveCamera();
  camara.position.z=20;
  renderizador=new THREE.WebGLRenderer();
  renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderizador.domElement);
  pIzqinit=0.05
  pDerinit=-0.05
  
}

function loop(){
  //pieza.rotateY(0.1);
  pieza.piernaIzq.rotateZ(pIzqinit);
  if (pieza.piernaIzq.rotation.z>=0.785398){
    pieza.piernaIzq.rotateZ(-pIzqinit);}
  
  pieza.piernaDer.rotateZ(pDerinit);
  if (pieza.piernaDer.rotation.z<=-0.785398){
    pieza.piernaDer.rotateZ(-pDerinit);}
  renderizador.render(escena,camara);
  requestAnimationFrame(loop);
}

setup();
loop();
