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

    async index(req:Request,res:Response){
        const filters = req.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if(!filters.week_day ||!filters.subject ||!filters.time){
            return res.status(400).json({error:"Missing filter to search classes "})
        }
        
        const timeInMinutes = convertHourToMinutes(time);
        
        const classes = await db('classes')
        .whereExists(function() {
            this.select('classes_schedule.*')
                .from('classes_schedule')
                .whereRaw('`classes_schedule`.`class_id`=`classes`.`id`')
                .whereRaw('`classes_schedule`.`week_day`= ??',[Number(week_day)])
                .whereRaw('`classes_schedule`.`from`<=??',[timeInMinutes])
                .whereRaw('`classes_schedule`.`to` > ??',[timeInMinutes])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id','=','users.id')
        .select(['classes.*','users.*']);

        return res.json(classes)
    }
}