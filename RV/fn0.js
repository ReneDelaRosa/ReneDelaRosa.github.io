function init(p){
  var malla=new THREE.Mesh(new THREE.BoxGeometry(p,p,p),new THREE.MeshNormalMaterial());
  escena=new THREE.Scene();
  escena.add(malla);
  camara=new THREE.PerspectiveCamera();
  camara.position.z=p*5;//Poscamara
  malla.rotateX(Math.PI/6);
  renderizador=new THREE.WebGLRenderer();
  renderizador.setSize(900,700);
  document.body.appendChild(renderizador.domElement);
}

//var main=function(p){
//renderizador.render(escena,camara);
//}

//var escena,camara,renderizador;
//init(1);
//main(2);

//var main=function(p){
  //p(1)
//renderizador.render(escena,camara);
//}

//var escena,camara,renderizador;
//main(init);

var loop=function(){
  requestAnimationFrame(loop);
  renderizador.render(escena,camara);
  malla.rotateY(0.01);
}

var escena,camara,renderizador,malla;
init(1)
loop();

