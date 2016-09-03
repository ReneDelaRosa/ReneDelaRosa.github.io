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
//Adorno superior
var figura=new THREE.Shape();
figura.moveTo(0,1.75);
figura.lineTo(-0.51,0.88);
figura.lineTo(-1.52,0.88);
figura.lineTo(-1.01,0);
figura.lineTo(-1.52,-0.88);
figura.lineTo(-0.51,-0.88);
figura.lineTo(0,-1.75);
figura.lineTo(0.51,-0.88);
figura.lineTo(1.52,-0.88);
figura.lineTo(1.01,0);
figura.lineTo(1.52,0.88);
figura.lineTo(0.51,0.88);
figura.lineTo(0,1.75);
var estrella=new THREE.ExtrudeGeometry(figura,{amount:0.1});
//var estrella=new THREE.ShapeGeometry(figura);
//Revolucion
//var revotorre= new THREE.LatheGeometry(puntos,32);
//Creacion de las mallas
//var malla=new THREE.Mesh(revotorre);
//var malla1=new THREE.Mesh(cilindro);

//Creacion de la figura final
//var torre=new THREE.Geometry();
//Union de las mallas
//torre.merge(malla.geometry, malla.matrix);
//torre.merge(malla1.geometry, malla1.matrix);
//Asignación del material a la malla final
var material=new THREE.MeshNormalMaterial();
//var torreMalla=new THREE.Mesh(torre,material);

var malla2=new THREE.Mesh(estrella,material);

var escena=new THREE.Scene();
//escena.add(torreMalla);
escena.add(malla2);

//torreMalla.rotateX(Math.PI/4);

var camara=new THREE.PerspectiveCamera();
camara.position.z=15;
camara.position.y=2.5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
