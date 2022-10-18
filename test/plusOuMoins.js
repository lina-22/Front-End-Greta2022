// générer un nombre aléatoire 
// demandeur l'user de devnier le nombre (réponse)
// tant que nombre aléatoire n'eat pas égale à réponse
// demandeur l'user de devnier le nombre (réponse)

// si nombre aléatoire <réponse
// afficher "c'est moins"
// sinon afficher "c'est plus"
//************************ */
// generate a random number within 1 and 10

// let nombre = Math.random();
// console.log(nombre);

// let nombre1 = Math.ceil(Math(Math.random()*10));
// console.log(nombre1);
// ask the user to guess the number (response)

// let response = prompt("deviner un nombre entre 1 et 10");
// as long as random number is not equal to answer
// ask the user to guess the number (response)

// if random number < answer
// if (nombre>response){
//     console.log("c'est moins");
// }else if(nombre<response){
//     console.log("c'est plus")
// }else{
//     console.log("c'est exact, vous avez gagné")
    
// }
// display "it's less"
// otherwise display "it's over"

//************************ */

///*************copy de share my code */

//générer un nombre aléatoire entre  1 et 10
let nombre = Math.ceil((Math.random()*10));
console.log(nombre);
//demander l'user de deviner le nombre (réponse)
do{
    let reponse = prompt("deviner un nombre entre 1 et 10");
    //si nombre aléatoire < réponse
    
    if (nombre < reponse) {
        console.log("c'est moins");
    } else if(nombre > reponse){
        console.log("c'est plus");
    }
    else{
        console.log("c'est exact, vous avez gagné");
        break;
    }
}while (true);

//afficher "c'est moins"
// sinon afficher "c'est plus"

//tant que nombre aléatoire n'est pas égal à réponse
    //demander l'user de deviner le nombre (réponse)
        //si nombre aléatoire < réponse
            //afficher "c'est moins"
        // sinon afficher "c'est plus"
