/* Classe qui récupère les données de la CardPage */


export default class DataCard {
    constructor(id, data) {
        this._id = id
        this._data = data
    }

    /* Fonction qui récupère l'id de la page,*/ 
    /*la liste des id, le numéro de la page et le nombre de pages Card */
    dataFactory() {

        let pageData = this._data.filter(e => e.id === this._id)[0];

        const numberOfCardPage = this._data.length;

        let pageId = pageData.id

        let tabId = this._data.map((e) => e.id);
    
        let index = tabId.indexOf(pageId);

        return({ index, tabId, numberOfCardPage, pageData })
    }
}