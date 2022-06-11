import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {


    return(
        <div>
            <FamiliaMembro nome='Pedro' sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome='Maria' sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome='Lucas' sobrenome={props.sobrenome}></FamiliaMembro>
        </div>
    )
}