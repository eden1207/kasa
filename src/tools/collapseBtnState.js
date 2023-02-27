/* Fonction qui indique si la balise d'information (collapse) */
/* est sur la page A propos où sur la page d'une Card pour adapter l'affichage CSS */


export default function collapseBtnState(answer) {

    if(answer === true) {
        return(1)
    } else if(answer === false) {
        return(2)
    } else {
        console.log('Value unknown')
    }
}