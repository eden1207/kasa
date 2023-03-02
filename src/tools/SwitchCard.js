/* Classe qui gère le caroussel au clique */


export default class SwitchCard {
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

    prev() {
        /* On récupère le numéro de la page et on renvoye l'id de la page précédente vers le Link */
        const dataObject = this.dataFactory();
        if(dataObject.index === 0) {
            return dataObject.tabId[dataObject.numberOfCardPage-1]
        }else if(dataObject.index !== 0) {
            return dataObject.tabId[dataObject.index-1]
        }else{
            console.log('value unknown')
        }
    }

    next() {
        /* On récupère le numéro de la page et on renvoye l'id de la page suivante vers le Link */
        const dataObject = this.dataFactory();
        if(dataObject.index === dataObject.numberOfCardPage-1) {
            return dataObject.tabId[0]
        }else if(dataObject.index !== dataObject.numberOfCardPage-1) {
            return dataObject.tabId[dataObject.index+1]
        }else{
            console.log('value unknown')
        }
    }
}