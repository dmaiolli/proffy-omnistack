import React from 'react';
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

import './styles.css'

interface PageHeaderProps{
    title: string;
    description?: string; // O ponto de interrogação diz que ela não é obrigatória
}

const  PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to="/">
                <img src={backIcon} alt="voltar"/>
            </Link>
            <img src={logoImg} alt="Proffy Logo"/>
        </div>
        <div className="header-content">
            <strong>{props.title}</strong>
            { props.description ? <p> { props.description }</p> : null }
            {props.children}
        </div>
    </header>
    );
}

export default PageHeader;