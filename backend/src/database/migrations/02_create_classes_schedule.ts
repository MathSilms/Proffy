import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('classes_schedule',t =>{
        t.increments('id').primary();

        t.integer('week_day').notNullable();
        t.integer('from').notNullable();
        t.integer('to').notNullable();

        t.integer('class_id')
         .notNullable()
         .references('id')
         .inTable('classes')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('classes_schedule');
}