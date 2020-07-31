import React from 'react'
import PageRoot from '../../../componentes/PageRoot'
import { Link } from 'react-router-dom'

function CadastroVideo(){

    return (
        <PageRoot>
            <h1>Cadastro de vídeos</h1>
            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageRoot>
    )
}

export default CadastroVideo