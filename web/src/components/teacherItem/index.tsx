import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css'

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/62664418?s=460&u=ea78aa7e836fd341896ae8b4e1d2c647d9b85194&v=4" alt="Matheus"/>
                        <div>
                            <strong>Matheus de Oliveira</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p>
                        Entusiasta das melhores tecnologias de química avançada.
                        <br/><br/>
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiencias 
                    </p>
                    <footer>
                        <p>
                            preço/hora
                            <strong>R$:80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;