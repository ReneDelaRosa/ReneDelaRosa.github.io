//Primera parte llama a los cargadores y se sale
//Segunda parte es ejecutar el loop

var setupDone=false;
function loop(){
requestAnimationFrame(loop)
if(textura1!==undefined && textura2!==undefined && !setupDone)
setup2();
.
.
.
}

function setup2(){
setupDone=true;
.
.
.

}

THREE.Mesh.call(this,Geom,Material)
