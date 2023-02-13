import React from 'react'
import '../styles/AboutCard/AboutCard.css'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

export default function Card({ title, text, classCloseWindow, classOpenWindow, classText }) {

    function closeWindow(closeBtnName, openBtnName, textBlock) {
        document.querySelector(textBlock).style.display = "none";
        document.querySelector(closeBtnName).style.display = "none";
        document.querySelector(openBtnName).style.display = "flex";
    }

    function openWindow(closeBtnName, openBtnName, textBlock) {
        document.querySelector(textBlock).style.display = "flex";
        document.querySelector(openBtnName).style.display = "none";
        document.querySelector(closeBtnName).style.display = "flex";
    }

    return(
        <div className='AboutCardStyle'>
            <button className={'styleBtn styleBtn_dimensions styleBtn_borders styleBtn_text ' + classCloseWindow} onClick={() => closeWindow('.' + classCloseWindow, '.' + classOpenWindow, '.' + classText)} type='button'>{title} <SlArrowUp /></button>
            <button className={'styleBtn styleBtn_dimensions styleBtn_borders styleBtn_text ' + classOpenWindow} onClick={() => openWindow('.' + classCloseWindow, '.' + classOpenWindow, '.' + classText)} type='button'>{title} <SlArrowDown /></button>
            <div className={'styleContaint styleContaint_dimensions styleContaint_borders ' + classText}>
                <p className='styleContaint_text'>{text}</p>
            </div>
        </div>
    )
}