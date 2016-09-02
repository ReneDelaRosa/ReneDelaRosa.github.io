//Puntos de la torre
var puntos=[                  
  new THREE.Vector2(0.1,0),
  new THREE.Vector2(2,0.0),
  new THREE.Vector2(2,0.5),
  new THREE.Vector2(1.75,0.5),
  new THREE.Vector2(1.75,1),
  new THREE.Vector2(1.2,1.8),
  new THREE.Vector2(1.2,5.5),
  new THREE.Vector2(1.75,6.3),
  new THREE.Vector2(1.75,6.6),
  new THREE.Vector2(0.1,6.6)
];
//Puntos de la parte superior
var puntosup=[
  new THREE.Vector2(1.75,6.55),
  new THREE.Vector2(1.75,7.25),
  new THREE.Vector2(1.25,7.25),
  new THREE.Vector2(1.25,6.55)
];

var revotorre= new THREE.LatheGeometry(puntos,18);
var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(revotorre,material);

var puntasup= new THREE.LatheGeometry(puntosup,18,0,2*Math.PI/9);
var puntasup1= new THREE.LatheGeometry(puntosup,18,3*Math.PI/9,5*Math.PI/9);
var malla1=new THREE.Mesh(puntasup,material);
var malla2=new THREE.Mesh(puntasup1,material);

var escena=new THREE.Scene();
escena.add(malla);
escena.add(malla1);
escena.add(malla2);

malla2.rotateX(Math.PI/4);
malla2.rotateY(Math.PI/4);

var camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=2.5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
