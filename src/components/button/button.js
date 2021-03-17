import React from 'react'
import "./button.css"

const button = ({label}) => {
    return (
        <div data-testid="button" className="button-style"> 
           Hello {label}
        </div>
    )
}

export default button
