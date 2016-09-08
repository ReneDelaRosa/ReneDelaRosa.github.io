var cubos = new Array(8);
var mallas= new Array(8);
//Arreglos 2D
for (var a = 0; a < 8; i++) {
  cubos[a] = new Array(8);
  mallas[a]=new Array(8);
}
var x0=-35;
var y0=-35;
var el0=0;
var material=new THREE.MeshNormalMaterial();
                      //for (var y=0;y<9;y++){
  for (var x=0;x<8;x++){
  cubos.push(new THREE.BoxGeometry(10,10,10));
  cubos[el0][x].translate(x0+10,0,-5)
  mallas[el0][x]=new THREE.Mesh(cubos[x],material);
  }
  el0=el0+1
  x0=-35

  
var escena=new THREE.Scene();
escena.add(mallas);
renderizador.render(escena,camara);

var camara=new THREE.PerspectiveCamera();
camara.position.z=250;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
