import { React } from 'react'
import PropTypes from 'prop-types';
import '../../styles/InformationText/InformationText.css'


export default function InformationText({ text, isList }) {

    return isList ? (
        <ul className='style-list style-list_dimensions style-list_borders style-list_aspect'>
            {text.map((data, index) => <li key={`member${index}`}>{data}</li>)}
        </ul>
    ) : (
        <p className='style-text'>{ text }</p>
    )
}

InformationText.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    isList: PropTypes.bool
}