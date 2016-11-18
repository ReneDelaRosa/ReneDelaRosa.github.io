var escena=new THREE.Scene();
var iluminacion= new THREE.PointLight(0xFFFFFF);
var iluminacion2= new THREE.PointLight(0xFFFFFF);
var iluminacion3= new THREE.PointLight(0xFFFFFF);
var iluminacion4= new THREE.PointLight(0xFFFFFF);
iluminacion.position.z=20;
iluminacion2.position.x=20;
iluminacion3.position.x=-20;
iluminacion4.position.y=-20;

var loader = new THREE.JSONLoader();
var createMesh = function( geometry )
{
    var zmesh = new THREE.Mesh( geometry,new THREE.MeshBasicMaterial({color: 0x00ff00}));
    zmesh.position.set( 0, 0, 0 );
    zmesh.scale.set( 3, 3, 3 );
    zmesh.overdraw = true;
    escena.add( zmesh );
};
loader.load( "prueba1.js", createMesh );

var material=new THREE.MeshBasicMaterial({color: 0x00ff00});
var forma=new THREE.SphereGeometry(1);
var malla=new THREE.Mesh(forma,material);
forma.translate(0,5,0);
escena.add(malla);
escena.add(iluminacion);
escena.add(iluminacion2);
escena.add(iluminacion3);
escena.add(iluminacion4);
var camara=new THREE.PerspectiveCamera();

camara.position.z=1000;

var renderizador= new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

