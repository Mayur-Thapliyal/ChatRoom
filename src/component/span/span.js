import './span.css'
import React from 'react'

export default function Span(props) {
    switch (props.error_type){
        case 'invalid':
            return (
                <>
                    <span className='ErrorSpan'>***Invalid {props.name}</span>
                </>
                )
        case 'empty field':
            return (
                <>
                    <span className='EmptySpan'>***{props.name} Field can't be empty</span>
                </>
                )
        default:
            return(
            <>
                    <span>Error {props.name}</span>
            </>
            )
    }
}
