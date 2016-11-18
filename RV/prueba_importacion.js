var escena=new THREE.Scene();

var loader = new THREE.JSONLoader();
 
var createMesh = function( geometry )
{
    var zmesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
    zmesh.position.set( 0, 0, 0 );
    zmesh.scale.set( 3, 3, 3 );
    zmesh.overdraw = true;
    scene.add( zmesh );
};
 
loader.load( "prueba1.js", createMesh );

var forma=new THREE.SphereGeometry(1);
var material=new THREE.MeshBasicMaterial({color: 0x00ff00});
var malla=new THREE.Mesh(forma,material);
forma.translate(0,5,0);
escena.add(malla);
var camara=new THREE.PerspectiveCamera();

camara.position.z=15;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
