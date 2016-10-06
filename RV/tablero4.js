//https://luishdzupiita.github.io/rv/tablerotextura.js
//Torre
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
var estrella=new THREE.ExtrudeGeometry(figura,{amount:0.4,bevelEnabled: false});
estrella.rotateX(-Math.PI/2);
estrella.translate(0,6.6,0)
//Revolucion
var revotorre= new THREE.LatheGeometry(puntos,32);
//Creacion de las mallas
var tmalla=new THREE.Mesh(revotorre);
var tmalla1=new THREE.Mesh(cilindro);
var tmalla2=new THREE.Mesh(estrella);
//Creacion de la figura final
var torre=new THREE.Geometry();
var torre2=new THREE.Geometry();
//Union de las mallas
torre.merge(tmalla.geometry, tmalla.matrix);
torre.merge(tmalla1.geometry, tmalla1.matrix);
var torreMalla=new THREE.Mesh(torre);
//Union de las mallas2
torre2.merge(torreMalla.geometry, torreMalla.matrix);
torre2.merge(tmalla2.geometry, tmalla2.matrix);
torre2.rotateX(Math.PI/2)
//Tablero de Ajedrez
//Definición de la geometría del tablero
var bloque=new THREE.BoxGeometry(10,10,10);  

//Declaración del objeto
var TEXTURA=new object();
//Declaración de las retrollamadas
  //Marmol blanco
TEXTURA.retrollamadamblanco=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  TEXTURA.malla=new THREE.Mesh(torre2,material);
  TEXTURA.escena.add(TEXTURA.malla);  
}
  //Marmol negro
TEXTURA.retrollamadamnegro=function(textura){
   var material=new THREE.MeshBasicMaterial({map:textura});
  TEXTURA.malla1=new THREE.Mesh(torre2,material);
  TEXTURA.escena.add(TEXTURA.malla1);
}
  //Ceramica blanca
TEXTURA.retrollamadacblanca=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});

  TEXTURA.malla2=new THREE.Mesh();
  TEXTURA.escena.add(TEXTURA.malla2);
}
  //Ceramica negra
TEXTURA.retrollamadacnegra=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  //Partes negras
  //Creación del grupo del tablero
    var g1=new THREE.Group();
    var k=0;
    for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
     if(k%2==0){
     var malla=new THREE.Mesh(bloque,material);
    }
    malla.position.x=(j+1)*10;//Columnas
    malla.position.y=(i+1)*10;//Filas
    malla.matrixAutoUpdate=false;
    malla.updateMatrix();
    malla.receiveShadow=true;
    g1.add(malla);
    k++;
  }
k++;
}
  TEXTURA.malla3=new THREE.Mesh();
  TEXTURA.escena.add(TEXTURA.malla3);
}
  //Madera
TEXTURA.retrollamadamadera=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  TEXTURA.malla4=new THREE.Mesh();
  TEXTURA.escena.add(TEXTURA.malla4);  
}

TEXTURA.setup=function(){
  
}

cargador1.load(imagen1,retro1)
cargador4.load(imagen4,retro4)

function setup(){
  if ((textura!==undefined)&&(textura2!==undefined)&&(textura3!==undefined)&&(textura4!==undefined)&&!setupDone){
  setupDone=true;
  }
  Geometry
  Material
  Formas
  Escena
  Renderizador
  Camara
}

function loop(){
  Request...Frame(loop)
  setuo();
}
