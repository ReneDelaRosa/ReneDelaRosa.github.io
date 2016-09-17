//Definición de la geometría
var bloque=new THREE.BoxGeometry(10,10,10);
//Materiales
var mw=new THREE.MeshBasicMaterial({color: 0xffffff});
var mb=new THREE.MeshBasicMaterial({color: 0x686868});
var mc=new THREE.MeshBasicMaterial({color: 0x714523});
//Creación del grupo del tablero
var g1=new THREE.Group();
var k=0;
for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    if(k%2==0){
    var malla=new THREE.Mesh(bloque,mb);
    }
    else{
    var malla= new THREE.Mesh(bloque,mw);  
    }
    malla.position.x=(j+1)*10;//Filas
    malla.position.y=(i+1)*10;//Columnas
    malla.matrixAutoUpdate=false;
    malla.updateMatrix();
    g1.add(malla);
  k++;}
k++;}
//Creación del grupo del borde
var g2= new THREE.Group();

for(var l=0;l<10;l++){
  for(var m=0;m<2;m++){
  var malla2= new THREE.Mesh(bloque,mc);
  if(m==1){
    malla2.position.y=90;
  }
  else{
  malla2.position.y=0; 
  malla2.position.x=(l*10);
  malla2.matrixAutoUpdate = false;
  malla2.updateMatrix();
  g2.add(malla2);
}}}


var escena=new THREE.Scene();
escena.add(g1);
escena.add(g2);

var camara=new THREE.PerspectiveCamera();
camara.position.z=200;
camara.position.x=40;
camara.position.y=40;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
