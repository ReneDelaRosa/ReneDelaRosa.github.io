var escena=new THREE.Scene();

//var mtlLoader=new THREE.MTLLoader();
	//mtlLoader.load("Pieza1.mtl",function(materials){
		//materials.preload();
		
    var objLoader=new THREE.OBJLoader();
		//objLoader.setMaterials(materials);
		objLoader.load("Pieza1.obj",  function(mesh){
			escena.add(mesh);
			mesh.position.set(0,0,0);
		//});
		});

var camara=new THREE.PerspectiveCamera();
camara.position.z=30;
camara.position.y=0;

var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.render(escena,camara);
