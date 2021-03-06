import React from 'react'
import './style.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
import Input from '../../components/input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="cantainer">
            <PageHeader title="Esses são os proffys disponíveis">
                <form  id="search-teachers">
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
                        
                        <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        options={[
                            { value:'0',label:'Domingo'},
                            { value:'1',label:'Segunda'},
                            { value:'2',label:'Terça-feira'},
                            { value:'3',label:'Quarta-feira'},
                            { value:'4',label:'Quinta-feira'},
                            { value:'5 Física',label:'Sexta-feira'},
                            { value:'6',label:'Sábado'},
                            
                        ]}/>

                    
                    <Input 
                    name="time" 
                    label="Hora"
                    type="time"/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;