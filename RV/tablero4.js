//https://luishdzupiita.github.io/rv/tablerotextura.js
//Torre
//Puntos de la torre
var setupdone=false;
var textura1=false;
var textura2=false;
var textura3=false;
var textura4=false;
var textura5=false;
var puntos=[                  
  new THREE.Vector2(0,0),
  new THREE.Vector2(2,0.0),
  new THREE.Vector2(2,0.5),
  new THREE.Vector2(1.75,0.5),
  new THREE.Vector2(1.75,1),
  new THREE.Vector2(1.2,1.8),
  new THREE.Vector2(1.2,5.5),
  new THREE.Vector2(1.75,6.3),
  new THREE.Vector2(1.75,6.6),
  new THREE.Vector2(0,6.6)
];
//Cilindro medio
var cilindro = new THREE.CylinderGeometry(.75,.75,7.25,32);
cilindro.translate(0,7.25/2,0);
//Adorno superior
var figura=new THREE.Shape();
figura.moveTo(0,1.75);
figura.lineTo(-0.51,0.88);
figura.lineTo(-1.52,0.88);
figura.lineTo(-1.01,0);
figura.lineTo(-1.52,-0.88);
figura.lineTo(-0.51,-0.88);
figura.lineTo(0,-1.75);
figura.lineTo(0.51,-0.88);
figura.lineTo(1.52,-0.88);
figura.lineTo(1.01,0);
figura.lineTo(1.52,0.88);
figura.lineTo(0.51,0.88);
figura.lineTo(0,1.75);
var estrella=new THREE.ExtrudeGeometry(figura,{amount:0.4,bevelEnabled: false});
estrella.rotateX(-Math.PI/2);
estrella.translate(0,6.6,0)
//Revolucion
var revotorre= new THREE.LatheGeometry(puntos,32);
//Creacion de las mallas
var tmalla=new THREE.Mesh(revotorre);
var tmalla1=new THREE.Mesh(cilindro);
var tmalla2=new THREE.Mesh(estrella);
//Creacion de la figura final
var torre=new THREE.Geometry();
var torre2=new THREE.Geometry();
//Union de las mallas
torre.merge(tmalla.geometry, tmalla.matrix);
torre.merge(tmalla1.geometry, tmalla1.matrix);
var torreMalla=new THREE.Mesh(torre);
//Union de las mallas2
torre2.merge(torreMalla.geometry, torreMalla.matrix);
torre2.merge(tmalla2.geometry, tmalla2.matrix);
torre2.rotateX(Math.PI/2)
//Tablero de Ajedrez
//Definición de la geometría del tablero
var bloque=new THREE.BoxGeometry(10,10,10);  

//Declaración del objeto
var TEXTURA=new Object();
//Declaración de las retrollamadas
//Marmol blanco
TEXTURA.retrollamadamblanco=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  TEXTURA.ftorre1=new THREE.Mesh(torre2,material);
  TEXTURA.ftorre2=new THREE.Mesh(torre2,material);
  ftorre1.position.x=10;
  ftorre1.position.y=10;
  ftorre1.position.z=5;
  ftorre2.position.x=80;
  ftorre2.position.y=10;
  ftorre2.position.z=5;
  ftorre1.scale.set(1.5,1.5,1.5)
  ftorre2.scale.set(1.5,1.5,1.5)
  textura1=true;
TEXTURA.escena.add(TEXTURA.ftorre1);
TEXTURA.escena.add(TEXTURA.ftorre2); 
}
//Marmol negro
TEXTURA.retrollamadamnegro=function(textura){
   var material=new THREE.MeshBasicMaterial({map:textura});
   TEXTURA.ftorre3=new THREE.Mesh(torre3,material);
   TEXTURA.ftorre4=new THREE.Mesh(torre4,material);
   ftorre3.position.x=10;
   ftorre3.position.y=80;
   ftorre3.position.z=5;
   ftorre4.position.x=80;
   ftorre4.position.y=80;
   ftorre4.position.z=5;
   ftorre3.scale.set(1.5,1.5,1.5)
   ftorre4.scale.set(1.5,1.5,1.5)
   textura2=true;
TEXTURA.escena.add(TEXTURA.ftorre3);
TEXTURA.escena.add(TEXTURA.ftorre4); 
}
//Ceramica blanca
TEXTURA.retrollamadacblanca=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
//Creación del grupo del tablero
   var g1=new THREE.Group();
   var k=0;
    for (var i=0;i<8;i++){
      for(var j=0;j<8;j++){
        if(k%2!=0){
        TEXTURA.malla2=new THREE.Mesh(bloque,material);
        }
        TEXTURA.malla2.position.x=(j+1)*10;//Columnas
        TEXTURA.malla2.position.y=(i+1)*10;//Filas
        TEXTURA.malla2.matrixAutoUpdate=false;
        TEXTURA.malla2.updateMatrix();
        TEXTURA.malla2.receiveShadow=true;
        g1.add(TEXTURA.malla2);
        k++;
    }
   k++;
   }
   textura3=true;
TEXTURA.escena.add(TEXTURA.malla2);
}
//Ceramica negra
TEXTURA.retrollamadacnegra=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  //Partes negras
  //Creación del grupo del tablero
    var g2=new THREE.Group();
    var k=0;
    for (var i=0;i<8;i++){
    for(var j=0;j<8;j++){
     if(k%2==0){
     TEXTURA.malla3=new THREE.Mesh(bloque,material);
    }
    TEXTURA.malla3.position.x=(j+1)*10;//Columnas
    TEXTURA.malla3.position.y=(i+1)*10;//Filas
    TEXTURA.malla3.matrixAutoUpdate=false;
    TEXTURA.malla3.updateMatrix();
    TEXTURA.malla3.receiveShadow=true;
    g2.add(TEXTURA.malla3);
    k++;
  }
k++;
}
   textura4=true;
TEXTURA.escena.add(TEXTURA.malla3);
}
//Madera
TEXTURA.retrollamadamadera=function(textura){
  var material=new THREE.MeshBasicMaterial({map:textura});
  //Creación del grupo del borde (Alto)
  var g3= new THREE.Group();
  for(var l=0;l<10;l++){//columnas
    for(var m=0;m<2;m++){//filas
    var malla4= new THREE.Mesh(bloque,material);
    if(m==1){
     malla4.position.y=90;
    }
    malla4.position.x=(l*10);
    malla4.matrixAutoUpdate = false;
    malla4.updateMatrix();
    malla4.receiveShadow=true;
    g3.add(malla4);
    }
  }
  //Creación del grupo del borde lateral (Ancho)
  var g4=new THREE.Group();
  for (var n=1;n<9;n++){//Filas
    for (var o=0;o<2;o++){//Columnas
    var malla5=new THREE.Mesh(bloque,material);
    if (o==1){
      malla5.position.x=90;
    }
    malla5.position.y=(n)*10
    malla5.matrixAutoUpdate = false;
    malla5.updateMatrix();
    malla5.receiveShadow=true;
    g4.add(malla5);
    }
  }
  textura5=true;
TEXTURA.escena.add(TEXTURA.malla4);
TEXTURA.escena.add(TEXTURA.malla5);
}

TEXTURA.setup=function(){
  //Creación de la escena
  TEXTURA.escena=new Three.Scene();
  //Cargadores de las texturas
  var cargador=new THREE.TextureLoader();
  var cargador1=new THREE.TextureLoader();
  var cargador2=new THREE.TextureLoader();
  var cargador3=new THREE.TextureLoader();
  var cargador4=new THREE.TextureLoader();
  //Configuración de las imagenes
  cargador.load("marmolnegro.jpg",TEXTURA.retrollamadamblanco);
  cargador1.load("marmolblanco.jpg",TEXTURA.retrollamadamnegro);
  cargador2.load("ceramicablanca.png",TEXTURA.retrollamadacblanca);
  cargador3.load("ceramicanegra.jpg",TEXTURA.retrollamadacnegra);
  cargador4.load("madera.jpg",TEXTURA.retrollamadamadera);
  //Creación de la cámara
  TEXTURA.camara=new THREE.PerspectiveCamera();
  TEXTURA.camara.position.z=130;
  TEXTURA.camara.position.x=45;
  TEXTURA.camara.position.y=45;
  TEXTURA.escena.rotateX(-Math.PI/6)
  //Creación del lienzo y renderizador
  var lienzo= document.getElementById("Tablero-ajedrez");
  TEXTURA.renderizador=new THREE.WebGLRenderer({canvas:lienzo,antialias:true});
  }
}

TEXTURA.loop=function(){
  requestAnimationFrame(TEXTURA.loop);
  if((textura1==true)&&(textura2==true)&&(textura3==true)&&(textura4==true)&&(textura5==true){
    if(setupdone==false){
     TEXTURA.setup();
     setupdone=true;
    }
      
  TEXTURA.renderizador.render(TEXTURA.escena,TEXTURA.camara);
  } 
}

TEXTURA.loop();
