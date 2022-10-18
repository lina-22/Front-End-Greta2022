
'use strict'; //on active le mode strict en mode strict, le moteur js interdit la création des variables global
function scope(){
    let local = 10;
    // global 15;
}

scope();
console.log(global);