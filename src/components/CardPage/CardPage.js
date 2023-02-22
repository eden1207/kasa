import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useParams, Link } from 'react-router-dom';

import '../../styles/CardPageDescription/CardPageDescription.css'

import { dataList } from '../../datas/dataList';

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import HostProfil from '../Shared/HostProfil.js';
import InformationCard from '../Shared/InformationCard'
import Stars from '../Shared/Stars'


function prevCard(id) {

    let pageData = dataList.filter(e => e.id === id)[0];

    const numberOfCardPage = dataList.length;

    let pageId = pageData.id

    let tabId = dataList.map((e) => e.id);

    let index = tabId.indexOf(pageId);

    /* On récupère le numéro de la page et on renvoye l'id de la page précédente vers le Link */
    if(index === 0) {
        return tabId[numberOfCardPage-1]
    }else if(index !== 0) {
        return tabId[index-1]
    }else{
        console.log('value unknown')
    }
}

function nextCard(id) {

    let pageData = dataList.filter(e => e.id === id)[0];

    const numberOfCardPage = dataList.length;

    let pageId = pageData.id

    let tabId = dataList.map((e) => e.id);

    let index = tabId.indexOf(pageId);

    /* On récupère le numéro de la page et on renvoye l'id de la page suivante vers le Link */
    if(index === numberOfCardPage-1) {
        return tabId[0]
    }else if(index !== numberOfCardPage-1) {
        return tabId[index+1]
    }else{
        console.log('value unknown')
    }
}
 

export default function CardPage() {

    const { id } = useParams();
    const pageData = dataList.filter(e => e.id === id)[0];

    const descriptionId = 'description' + id;
    const decriptionTitle = 'Description';
    const decriptionContent = pageData.description;

    const toolsId = 'tools' + id;
    const toolsTitle = 'Equipements';
    const toolsContent = pageData.equipments;

    return(
        <div>
            <Header />
            <div className='cardpage-picture-borders cardpage-picture-borders_dimensions cardpage-picture-borders_borders'>
                <img src={pageData.cover} alt={pageData.title} className='cardpage-picture' />
            </div>
            <div className='arrow arrow_dimensions arrow_borders'>
                <Link className='arrow-style' to={'/logements/' + prevCard(id)}><SlArrowLeft /></Link>
                <Link className='arrow-style' to={'/logements/' + nextCard(id)}><SlArrowRight /></Link>
            </div>
            <div className='cardpagetitle cardpagetitle_borders'>
                <div className='Introduction'>
                    <div className='Introduction-content'><h2>{pageData.title}</h2></div>
                    <div className='Introduction-content'><h3>{pageData.location}</h3></div>
                    <ul className='cardpage-tags'>
                        {pageData.tags.map((tag, index) => (
                            <li key={`${tag}-${index}`} className='cardpage-tags-element'>{ tag }</li>
                        ))}
                    </ul>
                </div>
                <div className='profil-square'>
                    <HostProfil host={pageData.host} />
                    <Stars rating={pageData.rating} />
                </div>
            </div>
            <div className='CardPageWindow'>
                <InformationCard key={descriptionId} title={decriptionTitle} text={decriptionContent} isList={false} />
                <InformationCard key={toolsId} title={toolsTitle} text={toolsContent} isList={true} />
            </div>
            <Footer />
        </div>
    )
}