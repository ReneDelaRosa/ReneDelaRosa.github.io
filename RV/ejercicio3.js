var forma=new THREE.Geometry();
forma.vertices.push(new THREE.Vector3(1,-1,-1));
forma.vertices.push(new THREE.Vector3(1,-1,1));
forma.vertices.push(new THREE.Vector3(-1,-1,1));
forma.vertices.push(new THREE.Vector3(-1,-1,-1));
forma.vertices.push(new THREE.Vector3(-1,1,-1));
forma.vertices.push(new THREE.Vector3(1,1,-1));
forma.vertices.push(new THREE.Vector3(1,1,1));
forma.vertices.push(new THREE.Vector3(-1,1,1));

forma.faces.push(new THREE.Face3(0,3,1));
forma.faces.push(new THREE.Face3(3,2,1));
forma.faces.push(new THREE.Face3(3,4,2));
forma.faces.push(new THREE.Face3(4,7,2));
forma.faces.push(new THREE.Face3(5,6,4));
forma.faces.push(new THREE.Face3(4,6,7));
forma.faces.push(new THREE.Face3(5,0,1));
forma.faces.push(new THREE.Face3(5,1,6));
forma.faces.push(new THREE.Face3(4,3,5));
forma.faces.push(new THREE.Face3(5,3,0));
forma.faces.push(new THREE.Face3(7,2,6));
forma.faces.push(new THREE.Face3(6,2,1));//Marcada

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material= new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(forma,material);
malla.rotateX(Math.PI/2);
malla.rotateY(Math.PI/2);

var escena= new THREE.Scene();
escena.add(malla);
var camara=new THREE.PerspectiveCamera();
camara.position.z=4;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
