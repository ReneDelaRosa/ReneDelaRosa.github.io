

var puntos[];
  puntos[0]=new THREE.Vector2(0.1,0);
  puntos[1]=new THREE.Vector2(2,0.0);
  puntos[2]=new THREE.Vector2(2,0.5);
  puntos[3]=new THREE.Vector2(1.75,0.5);
  puntos[4]=new THREE.Vector2(1.75,1);
  puntos[5]=new THREE.Vector2(1.2,1.8);
  puntos[6]=new THREE.Vector2(1.2,5.5);
  puntos[7]=new THREE.Vector2(1.75,6.3);
  puntos[8]=new THREE.Vector2(1.75,6.6);
  puntos[9]=new THREE.Vector2(0.1,6.6);

var revotorre= new THREE.LatheGeometry(puntos);
var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(revotorre,material);

var escena=new THREE.Scene();
escena.add(malla);

var camara=new THREE.PerspectiveCamera();
camara.position.z=500;
//camara.position.y=2.5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
