var escena=new THREE.Scene();

var loader = new THREE.JSONLoader(); 
var createMesh = function( geometry )
{
    var zmesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
    zmesh.position.set( 0, 0, 0 );
    zmesh.scale.set( 1, 1, 1 );
    zmesh.overdraw = true;
    escena.add(zmesh);
};
loader.load("Cuboconcilindro.js", createMesh);

var camara=new THREE.PerspectiveCamera();
camara.position.z=20;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
