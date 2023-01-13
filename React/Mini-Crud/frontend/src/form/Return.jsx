import React from 'react';
import './App.css';
import Header from '../components/Header';
import { Link } from 'react-router-dom'

function Return() {
    return (
        <div>

            <Header nome="Muito obrigado pela sua resposta!"></Header>

            <h2 className='text-center p-5'>Deseja voltar para a pagina da pesquisa?</h2>

            <div className='col-1 m-auto'>
                <Link to="/" ><button type="button" class="btn btn-success">Voltar</button></Link>
            </div>

        </div>
    );
}

export default Return;