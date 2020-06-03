import React from 'react';
import './styles.css';
import almocoImg from '../../assets/comida.png';
import logoImg from '../../assets/logo.png';
import {FiLogIn} from 'react-icons/fi';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Som do Mato"></img>

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Usuário"/>
                    <input placeholder="Senha"/>
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro.
                    </a>
                </form>
            </section>

            <img src={almocoImg} alt="Almoço"></img>
        </div>
    );
}