//Puntos de la torre
var puntos=[                  
  new THREE.Vector2(0,0),
  new THREE.Vector2(2,0.0),
  new THREE.Vector2(2,0.5),
  new THREE.Vector2(1.75,0.5),
  new THREE.Vector2(1.75,1),
  new THREE.Vector2(1.2,1.8),
  new THREE.Vector2(1.2,5.5),
  new THREE.Vector2(1.75,6.3),
  new THREE.Vector2(1.75,6.6),
  new THREE.Vector2(0,6.6)
];
//Cilindro medio
var cilindro = new THREE.CylinderGeometry(.75,.75,7.25,32);
cilindro.translate(0,7.25/2,0);

var revotorre= new THREE.LatheGeometry(puntos,32);
var material=new THREE.MeshNormalMaterial();

var malla=new THREE.Mesh(revotorre,material);
var malla1=new THREE.Mesh(cilindro,material);

var escena=new THREE.Scene();
escena.add(malla);
escena.add(malla1)

//malla.rotateX(Math.PI/3);

var camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=2.5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
