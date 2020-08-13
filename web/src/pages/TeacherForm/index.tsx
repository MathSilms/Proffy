import React from 'react'
import PageHeader from '../../components/pageHeader';

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'

import Input from '../../components/input';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="cantainer">
            <PageHeader 
            title="Que incrivel que você quer dar aulas"
            description="Pra começar, preencha esse formulário" />

            <main>
                <fieldset>
                    <legend> Seus dados</legend>

                    

                    <Input name="name" label="Nome Completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />

                </fieldset>

                <fieldset>
                    <legend> Sobre a aula</legend>

                    

                    <Input name="subject" label="Matéria" />
                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                    </p>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;