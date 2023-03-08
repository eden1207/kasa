import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import '../../styles/Gallery/Gallery.css'

function next(index, pictures) {
    if(index === pictures.length-1) {
        return 0
    }else if(index !== pictures.length-1) {
        return index+1
    }else{
        console.log('value unknown')
    }
}

function prev(index, pictures) {
    if(index === 0) {
        return pictures.length-1
    }else if(index !== 0) {
        return index-1
    }else{
        console.log('value unknown')
    }
}


export default function Gallery(props) {

    const pictures = props.pictures;
    const title = props.title;
    const onePicture = props.onePicture;

    const [index, switchIndex] = useState(0);

    return onePicture ? (
        <React.Fragment>
            <div className='cardpage-picture-borders cardpage-picture-borders_dimensions cardpage-picture-borders_borders'>
                <img src={pictures[index]} alt={title} className='cardpage-picture' />
            </div>
        </React.Fragment>
    ) : (
        <React.Fragment>
            <div className='cardpage-picture-borders cardpage-picture-borders_dimensions cardpage-picture-borders_borders'>
                <img src={pictures[index]} alt={title} className='cardpage-picture' />
            </div>
            <div className='arrow arrow_dimensions arrow_borders'>
                <button className='arrow-style' type='button' onClick={() => switchIndex(prev(index, pictures))}><SlArrowLeft /></button>
                <button className='arrow-style' type='button' onClick={() => switchIndex(next(index, pictures))}><SlArrowRight /></button>
            </div>
            <p className='gallery-number'>{(index+1) + '/' + pictures.length}</p>
        </React.Fragment>
    )
}

Gallery.propTypes = {
    onePicture: PropTypes.bool,
    title: PropTypes.string,
    pictures: PropTypes.array
}