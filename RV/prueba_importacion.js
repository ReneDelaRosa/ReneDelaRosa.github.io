var escena=new THREE.Scene();
var iluminacion= new THREE.PointLight(0xFFFFFF);
iluminacion.position.z=20;

// instantiate a loader
var loader = new THREE.JSONLoader();
// load a resource
loader.load(
	// resource URL
	'./prueba1.js',
	// Function when resource is loaded
	function ( geometry, materials ) {
		var material = new THREE.MultiMaterial( materials );
		var object = new THREE.Mesh( geometry, material );
		escena.add( object );
	}
);
var material=new THREE.MeshBasicMaterial({color: 0x00ff00});
var forma=new THREE.SphereGeometry(1);
var malla=new THREE.Mesh(forma,material);
forma.translate(0,5,0);
escena.add(malla);
escena.add(iluminacion);
var camara=new THREE.PerspectiveCamera();

camara.position.z=15;

var renderizador= new THREE.WebGLRenderer({alpha: true});
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);

