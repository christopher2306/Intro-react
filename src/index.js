import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from './components/NumeroAleatorio'
import Card from './components/layout/Card'



ReactDOM.render(
    <div>
        <h1>Fundamentos React</h1>

        <Card titulo="Primeiro componente">
        <Primeiro></Primeiro>
        </Card>

        <Card titulo="Desafio Aleatório">
        <NumeroAleatorio
            min={1}
            max={20}>
        </NumeroAleatorio>
        </Card>

        <Card titulo="Com Parametro">
        <ComParametro
            titulo="Situação do aluno"
            aluno= 'Jose'
            nota= {9.2} >
        </ComParametro>
        </Card>
    </div>,
    document.getElementById('root')
    )