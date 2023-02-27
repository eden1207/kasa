/* Fonction qui indique si l'id de la page existe pour renvoyer par la suite */
/* sur la page correspondant à l'id ou l'erreur 404  */


export default function idExist(data, id) {
    let tabId = data.map((e) => e.id);
    let answer = false;
    tabId.forEach((e) => {
        if(e === id) {
            answer = true;
        }
    })
    return answer
}