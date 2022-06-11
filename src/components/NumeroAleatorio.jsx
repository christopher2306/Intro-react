import React from 'react'

export default function NumeroAleatorio (props){

    const { min, max} = props;
    const sort = parseInt(Math.random()*(max-min)) + min;
    return (
        <div>
            <h2>Valor Sorteado</h2>
            <p>O valor sorteado foi {sort}</p>
        </div>
    )
}