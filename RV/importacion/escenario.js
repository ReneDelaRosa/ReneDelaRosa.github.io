var escena, camara, luzambiente, renderizador, posx

function init(){
escena=new THREE.Scene();
camara=new THREE.PerspectiveCamera();
piernaIzq=new THREE.CylinderGeometry(1.5,1,6.5,32);
pieIzq=new THREE.CylinderGeometry(1,.6,4,32);
piernaDer=new THREE.CylinderGeometry(1.5,1,6.5,32);
pieDer=new THREE.CylinderGeometry(1,.6,4,32);
//
pieIzq.translate(-3.5,-1,0);
pieDer.translate(-3.5,-1,0);
pieIzq.rotateZ(Math.PI/2);
pieDer.rotateZ(Math.PI/2);
	
var PiernaizqMalla=new THREE.Mesh(piernaIzq);
var PieizqMalla=new THREE.Mesh(pieIzq);

var PiernaderMalla=new THREE.Mesh(piernaDer);
var PiederMalla=new THREE.Mesh(pieDer);
	
var Piernal=new THREE.Geometry();
Piernal.merge(PiernaizqMalla.geometry, PiernaizqMalla.matrix);
Piernal.merge(PieizqMalla.geometry, PieizqMalla.matrix);
var Plcompleta=new THREE.Mesh(Piernal,new THREE.MeshNormalMaterial());
	
var Piernar=new THREE.Geometry();
Piernar.merge(PiernaderMalla.geometry, PiernaderMalla.matrix);
Piernar.merge(PiederMalla.geometry, PiederMalla.matrix);
var Prcompleta=new THREE.Mesh(Piernar,new THREE.MeshNormalMaterial());



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
    escena.add(Plcompleta);
    escena.add(Prcompleta);
    Plcompleta.position.y=-1.5;
    Plcompleta.position.z=-3.5;
    Prcompleta.position.y=-1.5;
    Prcompleta.position.z=3.5;
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
requestAnimationFrame(animate);
renderizador.render(escena,camara);
}
init();
animate();
