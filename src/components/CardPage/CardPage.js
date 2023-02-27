import { React, useEffect } from 'react'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import '../../styles/CardPageDescription/CardPageDescription.css'

import { dataList } from '../../datas/dataList';

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import HostProfil from '../Shared/HostProfil.js';
import InformationCard from '../Shared/InformationCard'
import Stars from '../Shared/Stars'

import SwitchCard from '../../tools/SwitchCard';
import idExist from '../../tools/idExist';
 

export default function CardPage() {

    /* id de la page */
    const { id } = useParams();

    /* Valeur qui indique si l'id existe. Si non, renvoye dans erreur 404 */
    const isExist = idExist(dataList, id);

    /* Code de renvoye vers page d'erreur 404 */
    const navigate = useNavigate();

    useEffect(() => {

        if(isExist === false){
          navigate('*');
        }

    }, [id, isExist, navigate]);
    

    /* Déclaration de variables pour affichage de données */

    const pageData = isExist === true ? new SwitchCard(id, dataList).dataFactory().pageData : [];

    const descriptionId = isExist === true ? 'description' + id : [];
    const decriptionTitle = isExist === true ? 'Description' : [];
    const decriptionContent = isExist === true ? pageData.description : [];
    
    const toolsId = isExist === true ? 'tools' + id : [];
    const toolsTitle = isExist === true ? 'Equipements' : [];
    const toolsContent = isExist === true ? pageData.equipments : [];
    
    const prevCardId = isExist === true ? new SwitchCard(id, dataList).prev() : [];
    const nextCardId = isExist === true ? new SwitchCard(id, dataList).next() : [];

    return isExist ? (
        
        <div>
            <Header />
            <div className='cardpage-picture-borders cardpage-picture-borders_dimensions cardpage-picture-borders_borders'>
                <img src={pageData.cover} alt={pageData.title} className='cardpage-picture' />
            </div>
            <div className='arrow arrow_dimensions arrow_borders'>
                <Link className='arrow-style' to={'/logements/' + prevCardId}><SlArrowLeft /></Link>
                <Link className='arrow-style' to={'/logements/' + nextCardId}><SlArrowRight /></Link>
            </div>
            <div className='cardpagetitle cardpagetitle_borders'>
                <div className='Introduction'>
                    <div className='Introduction-content'>
                        <h2>{pageData.title}</h2>
                    </div>
                    <div className='Introduction-content'>
                        <h3>{pageData.location}</h3>
                    </div>
                    <ul className='cardpage-tags cardpage-tags_dimensions cardpage-tags_borders cardpage-tags_aspect'>
                        {pageData.tags.map((tag, index) => (
                            <li key={`${tag}-${index}`} className='cardpage-tags-element cardpage-tags-element_dimensions cardpage-tags-element_borders cardpage-tags-element_aspect'>
                                { tag }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='profil-square profil-square_dimensions profil-square_aspect'>
                    <HostProfil host={pageData.host} />
                    <Stars rating={pageData.rating} />
                </div>
            </div>
            <div className='CardPageWindow CardPageWindow_dimensions CardPageWindow_borders'>
                <InformationCard key={descriptionId} title={decriptionTitle} text={decriptionContent} isCardPage={true} isList={false} />
                <InformationCard key={toolsId} title={toolsTitle} text={toolsContent} isCardPage={true} isList={true} />
            </div>
            <Footer />
        </div>
    ) : (
        null
    )
}