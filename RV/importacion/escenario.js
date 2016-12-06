var escena, camara, luzambiente, renderizador, posx

function init(){
escena=new THREE.Scene();
camara=new THREE.PerspectiveCamera();
	
//var forma=new THREE.BoxGeometry(1,1,1);
//var material=new THREE.MeshNormalMaterial();
//var cubo=new THREE.Mesh(forma, material);
//escena.add(cubo);

var loader = new THREE.JSONLoader();
var createMesh = function( geometry )
{
    var zmesh = new THREE.Mesh( geometry, new THREE.MeshNormalMaterial() );
    zmesh.position.set( 0, 0, 0 );
    zmesh.scale.set( 1,1, 1 );
    zmesh.overdraw = true;
    zmesh.position.z=0;
    zmesh.position.z=0;
    zmesh.position.z=0;
    //zmesh.rotation.y=-Math.PI/4;
    //zmesh.rotation.x=Math.PI/8;
    escena.add( zmesh );
};
loader.load( "peon.js", createMesh );



camara.position.z=50;
camara.position.x=25;
camara.position.y=0;
	
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
