import { React, useState } from 'react'
import PropTypes from 'prop-types';
import '../../styles/InformationCard/InformationCard.css'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";


function InformationText({ text, isList }) {

    return isList ? (
        <ul className='styleContaint_list'>
            {text.map((data, index) => <li key={`member${index}`}>{data}</li>)}
        </ul>
    ) : (
        <p className='styleContaint_text'>{ text }</p>
    )
}

export default function InformationCard({ title, text, isList }) {

    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className='AboutCardStyle'>
            <button className={'styleBtn styleBtn_dimensions styleBtn_borders styleBtn_text '} onClick={() => setIsOpen(false)} type='button'>{title} <SlArrowUp /></button>
            <div className={'styleContaint styleContaint_dimensions styleContaint_borders '}>
                <InformationText text={text} isList={isList} />
            </div>
        </div>
    ) : (
        <div className='AboutCardStyle'>
            <button className={'styleBtn styleBtn_dimensions styleBtn_borders styleBtn_text '} onClick={() => setIsOpen(true)} type='button'>{title} <SlArrowDown /></button>
        </div>
    )
}

InformationCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    isList: PropTypes.bool
}