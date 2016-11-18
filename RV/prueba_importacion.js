var escena=new THREE.Scene();

loader=new THREE.JSONLoader();
logo=function(object){
	cubocil=new THREE.Mesh(object,new THREE.MeshNormalMaterial());
	cubocil.position.set(0,0,0);
	cubocil.scale.set(1,1,1);
	escena.add(cubocil);
	}
loader.load("./prueba1.js",logo)

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
