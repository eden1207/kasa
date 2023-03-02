/* Fonction qui indique si l'id de la page existe pour renvoyer par la suite */
/* sur la page correspondant à l'id ou l'erreur 404  */


export default function isIdExist(data, id) {

    const dataPage = data.filter((e) => {
        if(e.id === id) {
            return true
        } else{
            return false
        }
    })

    return dataPage.length>0
}