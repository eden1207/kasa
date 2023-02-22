import React from 'react';
import PropTypes from 'prop-types';
import { FaStar } from "react-icons/fa";

export default function Stars(props) {

    const rating = props.rating;

    const colorList = ['gray', 'gray', 'gray', 'gray', 'gray'];

    for(let i=0; i<rating; i++) {
        colorList[i] = 'orange';
    }

    return (
        <div className='starline'>
            {colorList.map((color, index) => <FaStar key={`${color}-${index}`} className={color + '-star'} />)}
        </div>
    )
} 

Stars.propTypes = {
    rating: PropTypes.string
}