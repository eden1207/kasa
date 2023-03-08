import React, { useState } from 'react'
import PropTypes from 'prop-types';
import '../../styles/InformationCard/InformationCard.css'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import InformationText from './InformationText';
import collapseBtnState from '../../tools/collapseBtnState';


export default function InformationCard({ title, text, isCardPage, isList }) {


    const [isOpen, setIsOpen] = useState(false);

    return isOpen ? (
        <div className={'AboutCardStyle' + collapseBtnState(isCardPage)}>
            <button className={'styleBtn' + collapseBtnState(isCardPage) + ' styleBtn' + collapseBtnState(isCardPage) + '_dimensions  styleBtn' + collapseBtnState(isCardPage) + '_borders styleBtn' + collapseBtnState(isCardPage) + '_text'} onClick={() => setIsOpen(false)} type='button'>
                {title} <SlArrowUp />
            </button>
            <div className={'styleContaint' + collapseBtnState(isCardPage) + ' styleContaint' + collapseBtnState(isCardPage) + '_dimensions styleContaint' + collapseBtnState(isCardPage) + '_borders '}>
                <InformationText text={text} isList={isList} />
            </div>
        </div>
    ) : (
        <div className={'AboutCardStyle' + collapseBtnState(isCardPage)}>
            <button className={'styleBtn' + collapseBtnState(isCardPage) + ' styleBtn' + collapseBtnState(isCardPage) + '_dimensions styleBtn' + collapseBtnState(isCardPage) + '_borders styleBtn' + collapseBtnState(isCardPage) + '_text'} onClick={() => setIsOpen(true)} type='button'>
                {title} <SlArrowDown />
            </button>
        </div>
    )
}

InformationCard.propTypes = {
    title: PropTypes.string,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    isList: PropTypes.bool,
    isCardPage: PropTypes.bool
}