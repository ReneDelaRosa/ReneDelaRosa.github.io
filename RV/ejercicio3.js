var forma=new THREE.Geometry();
forma.vertices.push(new THREE.Vector3(-1,1,-1));
forma.vertices.push(new THREE.Vector3(-1,1,1));
forma.vertices.push(new THREE.Vector3(-1,-1,1));
forma.vertices.push(new THREE.Vector3(-1,-1,-1));
forma.vertices.push(new THREE.Vector3(1,-1,-1));
forma.vertices.push(new THREE.Vector3(1,1,-1));
forma.vertices.push(new THREE.Vector3(1,1,1));
forma.vertices.push(new THREE.Vector3(1,-1,1));
//cara trasera
forma.faces.push(new THREE.Face3(0,3,2));
forma.faces.push(new THREE.Face3(2,1,0));
//cara lateral izq
forma.faces.push(new THREE.Face3(7,2,3));
forma.faces.push(new THREE.Face3(3,4,7));
//cara frontal
forma.faces.push(new THREE.Face3(4,5,6));
forma.faces.push(new THREE.Face3(6,7,4));
//cara lateral derecha
forma.faces.push(new THREE.Face3(5,0,1));
forma.faces.push(new THREE.Face3(1,6,5));
//cara inferior
forma.faces.push(new THREE.Face3(4,3,0));
forma.faces.push(new THREE.Face3(0,5,4));
//cara superior
forma.faces.push(new THREE.Face3(6,1,2));
forma.faces.push(new THREE.Face3(2,7,6));//Marcada

forma.computeBoundingSphere();
forma.computeFaceNormals();

var material=new THREE.MeshNormalMaterial();
var malla=new THREE.Mesh(forma,material);
malla.rotateX(-Math.PI/4);
malla.rotateY(Math.PI/3);

var escena= new THREE.Scene();
escena.add(malla);
var camara=new THREE.PerspectiveCamera();
camara.position.z=5;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
