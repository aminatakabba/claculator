import React from 'react'
import './Number.css'

function Number({content, onButtonClick, type }) {
    return (
        <div className="number">
            <div className="number__container" onClick={onButtonClick(content)}>
                <h1 className="number__containerH1" >{content}</h1>
            </div>
        </div>
    )
}

export default Number
