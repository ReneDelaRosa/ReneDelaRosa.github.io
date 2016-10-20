function Pieza(){
THREE.object3D.call(this);
  this.piernaIzq=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  this.piernaDer=new THREE.Mesh(new THREE.BoxGeometry(1,5,1));
  var cuerpo=new THREE.Mesh(new THREE.BoxGeometry(5,10,5));
  this.piernaIzq.position.z=-2;
  this.piernaIzq.position.y=-2.5;
  this.piernaDer.position.z=2;
  this.PiernaDer.position.y=-2.5;
  cuerpo.position.z=2.5;
  escena.add(piernaIzq);
  escena.add(piernaDer);
  escena.add(cuerpo);
}

var pieza
Pieza.prototype=new THREE.Object3D

function setup(){
  escena=new THREE.Scene();
  pieza=new Pieza();
  camara=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
  var lienzo= document.getElementById("pierna_derizq");
  renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  renderizador.setSize(600,600);
}

function loop(){
  requestAnimationFrame(loop);
  pieza.rotateY=0.1;
  TEXTURA.renderizador.render(escena,camara);
}

setup();
loop();
