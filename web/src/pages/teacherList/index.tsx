import React from 'react'
import './style.css';
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem';
function TeacherList() {
    return (
        <div id="page-teacher-list" className="cantainer">
            <PageHeader title="Esses são os proffys disponíveis">
                <form  id="search-teachers">
                    
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>
        </div>
    )
}

export default TeacherList;