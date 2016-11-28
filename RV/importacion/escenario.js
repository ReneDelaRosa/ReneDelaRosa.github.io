var escena, camara, luzambiente, renderizador

function init(){
escena=new THREE.Scene();
camara=new THREE.PerspectiveCamera();
	
	
var forma=new THREE.BoxGeometry(1,1,1);
var material=new THREE.MeshNormalMaterial();
var cubo=new THREE.Mesh(forma, material);
escena.add(cubo);
	
var mtlLoader=new THREE.MTLLoader();
	mtlLoader.load("Pieza1.mtl",function(materials){
	materials.preload();
		
    	var objLoader=new THREE.OBJLoader();
		objLoader.setMaterials(materials);
		objLoader.load("Pieza1.obj",  function(mesh){
			escena.add(mesh);
			mesh.position.set(0,0,0);
		});
	});

camara.position.z=30;
camara.position.y=0;
	
luzambiente=new THREE.AmbientLight(0xffffff, 0.2);
	escena.add(luzambiente);

renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
}
function animate() {
requestAnimationFrame(animate);
renderizador.render(escena,camara);
}
init();
animate();
