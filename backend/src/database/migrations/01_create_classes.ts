import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('classes',t =>{
        t.increments('id').primary();
        t.string('subject').notNullable();
        t.string('cost').notNullable();

        t.integer('user_id')
         .notNullable()
         .references('id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('classes');
}