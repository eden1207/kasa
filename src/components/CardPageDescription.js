import React from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { dataList } from '../datas/dataList';
import '../styles/CardPageDescription/CardPageDescription.css'
import HostProfil from './HostProfil.js';

function prevCard() {

    const url = window.location.href.split('_')[1];

    let pageData = dataList.filter(e => e.id === url)[0];

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

function nextCard() {

    const url = window.location.href.split('_')[1];

    let pageData = dataList.filter(e => e.id === url)[0];

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


function Stars(props) {
    const colorList = ['gray', 'gray', 'gray', 'gray', 'gray'];

    for(let i=0; i<props.rating; i++) {
        colorList[i] = 'orange';
    }

    return (
        <div className='starline'>
            {colorList.map((color, index) => <FaStar key={`${color}-${index}`} className={color + '-star'} />)}
        </div>
    )
}


export default function CardPageDescription({ title, cover, location, tags, host, rating }) {
    return(
        <div>
            <div className='cardpage-picture-borders cardpage-picture-borders_dimensions cardpage-picture-borders_borders'>
                <img src={cover} alt={title} className='cardpage-picture' />
            </div>
            <div className='arrow arrow_dimensions arrow_borders'>
                <Link className='arrow-style' to={'/logement_' + prevCard()}><SlArrowLeft /></Link>
                <Link className='arrow-style' to={'/logement_' + nextCard()}><SlArrowRight /></Link>
            </div>
            <div className='cardpagetitle cardpagetitle_borders'>
                <div className='Introduction'>
                    <div className='Introduction-content'><h2>{title}</h2></div>
                    <div className='Introduction-content'><h3>{location}</h3></div>
                    <ul className='cardpage-tags'>
                        {tags.map((tag, index) => (
                            <li key={`${tag}-${index}`} className='cardpage-tags-element'>{ tag }</li>
                        ))}
                    </ul>
                </div>
                <div className='profil-square'>
                    <HostProfil host={host} />
                    <Stars rating={rating} />
                </div>
            </div>
        </div>
    )
}