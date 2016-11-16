var escena=new THREE.Scene();

var loader = new THREE.JSONLoader();
loader.load('./Cuboconcilindro.js', function ( geometry, materials ) {
    var mesh = new THREE.Mesh( geometry, new THREE.MeshNorlalMaterial() );
    escena.add(mesh);
});
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
