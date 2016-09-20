//Definición de la geometría del tablero
var bloque=new THREE.BoxGeometry(10,10,10);
//Materiales del tablero
var mw=new THREE.MeshLambertMaterial({color: 0xffffff});//new THREE.MeshBasicMaterial({color: 0xffffff});
var mb=new THREE.MeshLambertMaterial({color: 0x686868});//new THREE.MeshBasicMaterial({color: 0x686868});
var mc=new THREE.MeshLambertMaterial({color: 0x714523});//new THREE.MeshBasicMaterial({color: 0x714523});
//Materiales de las torres
var tbmaterial1=new THREE.MeshLambertMaterial({color: 0x171714, transparent: true, opacity: 1});//Torre negra con opacidad del 100%
var tbmaterial2=new THREE.MeshLambertMaterial({color: 0x171714, transparent: true, opacity: 0.75});//Torre negra con opacidad del 75%
var twmaterial1=new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: 0.5});//Torre blanca con opacidad del 50%
var twmaterial2=new THREE.MeshLambertMaterial({color: 0xEEEED8, transparent: true, opacity: .25});//Torre blanca con opacidad del 25%
//Creación del grupo del tablero
var g1=new THREE.Group();
var k=0;
for (var i=0;i<8;i++){
  for(var j=0;j<8;j++){
    if(k%2==0){
      var malla=new THREE.Mesh(bloque,mb);
    }
    else{
      var malla= new THREE.Mesh(bloque,mw);  
    }
    malla.position.x=(j+1)*10;//Columnas
    malla.position.y=(i+1)*10;//Filas
    malla.matrixAutoUpdate=false;
    malla.updateMatrix();
    malla.receiveShadow=true;
    g1.add(malla);
    k++;
  }
k++;
}
//Creación del grupo del borde (Alto)
var g2= new THREE.Group();
for(var l=0;l<10;l++){//columnas
  for(var m=0;m<2;m++){//filas
  var malla2= new THREE.Mesh(bloque,mc);
  if(m==1){
    malla2.position.y=90;
  }
  malla2.position.x=(l*10);
  malla2.matrixAutoUpdate = false;
  malla2.updateMatrix();
  malla2.receiveShadow=true;
  g2.add(malla2);
  }
}
//Creación del grupo del borde lateral (Ancho)
var g3=new THREE.Group();
for (var n=1;n<9;n++){//Filas
  for (var o=0;o<2;o++){//Columnas
  var malla3=new THREE.Mesh(bloque,mc);
  if (o==1){
    malla3.position.x=90;
  }
  malla3.position.y=(n)*10
  malla3.matrixAutoUpdate = false;
  malla3.updateMatrix();
  malla3.receiveShadow=true;
  g3.add(malla3);
  }
}
//Torre
//Puntos de la torre
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
var ftorre1=new THREE.Mesh(torre2, twmaterial2);
var ftorre2=new THREE.Mesh(torre2, twmaterial1);
var ftorre3=new THREE.Mesh(torre2, tbmaterial1);
var ftorre4=new THREE.Mesh(torre2, tbmaterial2);
//Posición de las torres
ftorre1.position.x=10;
ftorre1.position.y=10;
ftorre1.position.z=5;

ftorre2.position.x=80;
ftorre2.position.y=10;
ftorre2.position.z=5;

ftorre3.position.x=10;
ftorre3.position.y=80;
ftorre3.position.z=5;

ftorre4.position.x=80;
ftorre4.position.y=80;
ftorre4.position.z=5;

//Escalamiento de las torres
ftorre1.scale.set(1.5,1.5,1.5)
ftorre2.scale.set(1.5,1.5,1.5)
ftorre3.scale.set(1.5,1.5,1.5)
ftorre4.scale.set(1.5,1.5,1.5)

//Creación de luces en la escena
var luzPuntual=new THREE.PointLight(0xFFFF00);//AMARILLO
var luzPuntual1=new THREE.PointLight(0xFF00FF);//ROSA
var luzPuntual2=new THREE.PointLight(0x00FFFF);//CYAN
//Posición de la iluminación
luzPuntual.position.x=10;
luzPuntual.position.y=90;
luzPuntual.position.z=70;
luzPuntual1.position.x=80;
luzPuntual1.position.y=90;
luzPuntual1.position.z=70;
luzPuntual2.position.x=100;
luzPuntual2.position.y=10;
luzPuntual2.position.z=70;
//Creación de la escena
var escena=new THREE.Scene();
escena.add(g1);
escena.add(g2);
escena.add(g3);
escena.add(ftorre1);
escena.add(ftorre2);
escena.add(ftorre3);
escena.add(ftorre4);
escena.add(luzPuntual);
escena.add(luzPuntual1);
escena.add(luzPuntual2);
//Creación de la cámara
var camara=new THREE.PerspectiveCamera();
camara.position.z=130;
camara.position.x=45;
camara.position.y=45;
escena.rotateX(-Math.PI/6)
//Renderizador y activación de sombras en la escena
var renderizador=new THREE.WebGLRenderer();
renderizador.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderizador.domElement);
renderizador.shadowMapEnabled=true;
ftorre1.castShadow=true;
ftorre2.castShadow=true;
ftorre3.castShadow=true;
ftorre4.castShadow=true;
luzPuntual.castShadow=true;
luzPuntual1.castShadow=true;
luzPuntual2.castShadow=true;
renderizador.render(escena,camara);
