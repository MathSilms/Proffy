import { Request, Response } from 'express'

import db from '../database/connection'
import convertHourToMinutes from '../utils/convertHourToMinuts'


export default new class ClassesController {
    async create(req:Request,res:Response){

        interface ScheduleItem {
            week_day:Number,
            from:string,
            to:string
        
        }

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body
    
        const trx = await db.transaction();

        try{
            const insertedUsersId = await trx('users').insert({
                name,
                avatar,
                whatsapp,
                bio,
            });
        
            const user_id = insertedUsersId[0]
        
            const insertedClassesIds =  await trx('classes').insert({
                subject,
                cost,
                user_id
            })
            const class_id = insertedClassesIds[0];
        
            const classSchedule = schedule.map((scheduleItem :ScheduleItem) =>{
                return {
                    class_id,
                    week_day:scheduleItem.week_day,
                    from:convertHourToMinutes(scheduleItem.from),
                    to:convertHourToMinutes(scheduleItem.to),
                };
            });
        
            await trx('classes_schedule').insert(classSchedule);
        
            await trx.commit();
        return res.status(201).send();

        } catch(err) {

            await trx.rollback();
            console.log(err);
            return res.status(400).json({
                error:'Unexpeacted error white creating new class'
            })
        }
    }
}