import React from 'react'
import PageHeader from '../../components/pageHeader';
import Input from '../../components/input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'



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
                    <TextArea name="bio" label="Biografia"/>

                </fieldset>

                <fieldset>
                    <legend> Sobre a aula</legend>

                    

                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value:'Artes',label:'Artes'},
                            { value:'Biologia',label:'Biologia'},
                            { value:'Ciências',label:'Ciências'},
                            { value:'Física',label:'Física'},
                            { value:'Geografia',label:'Geografia'},
                            { value:'Educação Física',label:'Educação Física'},
                            { value:'História',label:'História'},
                            { value:'Matemática',label:'Matemática'},
                            { value:'Português',label:'Português'},
                            { value:'Química',label:'Química'}
                        ]}/>

                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>
                
                <fieldset>
                    <legend> Horários disponíveis</legend>

                    

                    <Input name="subject" label="Matéria" />
                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;