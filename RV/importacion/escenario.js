var escena, camara, luzambiente, renderizador, posx

function init(){
escena=new THREE.Scene();
camara=new THREE.PerspectiveCamera();
piernaIzq=new THREE.Mesh(new THREE.CylinderGeometry(1.5,1,6.5,32),new THREE.MeshNormalMaterial());
piernaDer=new THREE.Mesh(new THREE.CylinderGeometry(1.5,1,6.5,32),new THREE.MeshNormalMaterial());

var loader = new THREE.JSONLoader();
var createMesh = function( geometry )
{
    var zmesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
    zmesh.position.set( 0, 0, 0 );
    zmesh.scale.set( 1,1, 1 );
    zmesh.overdraw = true;
    zmesh.position.x=0;
    zmesh.position.y=0;
    zmesh.position.z=0;
    //zmesh.rotation.y=-Math.PI/4;
    //zmesh.rotation.x=Math.PI/8;
    escena.add( zmesh );
    escena.add(piernaIzq);
    escena.add(piernaDer);
    piernaIzq.position.y=-3;
    piernaIzq.position.z=-3;
    piernaDer.position.y=-3;
    piernaDer.position.z=3;
};
loader.load( "Alfil.js", createMesh );
pIzqinit=0.05;
pDerinit=-0.05;
camara.position.z=50;
//camara.position.x=25;
camara.position.y=10;
	
//luzambiente=new THREE.AmbientLight(0xffffff, 0.2);
//escena.add(luzambiente);

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
}

function animate() {
  piernaIzq.rotateZ(pIzqinit);
  if (piernaIzq.rotation.z>0.785398){
    pIzqinit=-pIzqinit;
  }
  else if(piernaIzq.rotation.z<-0.785398){
    pIzqinit=-pIzqinit;
  }
  piernaDer.rotateZ(pDerinit);
  if (piernaDer.rotation.z<-0.785398){
    pDerinit=-pDerinit;
  }
  else if(piernaDer.rotation.z>0.785398){
    pDerinit=-pDerinit;
  }
requestAnimationFrame(animate);
renderizador.render(escena,camara);
}
init();
animate();
