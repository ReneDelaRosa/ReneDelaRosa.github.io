var figura=new THREE.Shape();
figura.moveTo(0,1.6);
figura.lineTo(-0.76,3.8);
figura.lineTo(-3.24,3.8);
figura.lineTo(-1.24,2.35);
figura.lineTo(-2,0);
figura.lineTo(0,1.45);
figura.lineTo(2,0);
figura.lineTo(1.24,2.35);
figura.lineTo(3.24,3.8);
figura.lineTo(0.76,3.8);
figura.lineTo(0,1.6);

var forma=new THREE.ShapeGeometry(figura);
var malla=new THREE.Mesh(forma)

var escena=new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.x=0;
camara.position.y=2.75;
camara.position.z=10;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
