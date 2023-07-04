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
        case '':
            break;
        default:
            return(
            <>
                    <span>Error {props.name}</span>
            </>
            )
    }
}
