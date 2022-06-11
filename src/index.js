import './App.css'
import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from './components/NumeroAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/familia'



ReactDOM.render(
    <div className='App'>
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Primeiro componente" color="#FA6900">
            <Primeiro></Primeiro>
            </Card>

            <Card titulo="Desafio Aleatório" color="#090">
            <NumeroAleatorio
                min={1}
                max={20}>
            </NumeroAleatorio>
            </Card>

            <Card titulo="Com Parametro" color="#E94C6F">
            <ComParametro
                titulo="Situação do aluno"
                aluno= 'Jose'
                nota= {9.2} >
            </ComParametro>
            </Card>

            <Card titulo="Familia" color="#E94C6F">
                <Familia sobrenome="Ferreira"></Familia>
            </Card>
        </div>
    </div>,
    document.getElementById('root')
    )