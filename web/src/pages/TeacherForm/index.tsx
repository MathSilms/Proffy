import React from 'react'
import PageHeader from '../../components/pageHeader';

import './styles'
function TeacherForm() {
    return (
        <div id="page-teacher-form" className="cantainer">
            <PageHeader 
                title="Que incrivel que você quer dar aulas"
                description="O primeiro passo é preencer esse formulário"
            />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <div className="input-block">
                        <label htmlFor="name">Nome Completo</label>
                        <input type="text" id="name"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="avatar">avatar</label>
                        <input type="text" id="avatar"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="whatsapp">whatsapp</label>
                        <input type="text" id="whatsapp"/>
                    </div>
                </fieldset>
            </main>
        </div>
    )
}

export default TeacherForm;