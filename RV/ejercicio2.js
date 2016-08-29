var escena=new THREE.Scene();
var camara=new THREE.PerspectiveCamera();

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);

camara.position.z=500;


var forma1=new THREE.CylinderGeometry(15,15,200,30);
var forma2=new THREE.SphereGeometry(50,32,32);
var material1=new THREE.MeshBasicMaterial( { color: 0x84550A } );
var material2=new THREE.MeshBasicMaterial( { color: 0x04AA04});
var tronco=new THREE.Mesh(forma1, material1);
var copa=new THREE.Mesh(forma2,material2);
copa.position.y=60;
tronco.position.y=-15;
escena.add(tronco);
escena.add(copa);
renderizador.render(escena,camara);
