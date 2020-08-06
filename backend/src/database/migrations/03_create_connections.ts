import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('connections',t =>{
        t.increments('id').primary();

        t.integer('user_id')
         .notNullable()
         .references('id')
         .inTable('users')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

         t.timestamp('created_at')
         .defaultTo('now()')
         .notNullable();
    });
}

export async function down(knex:Knex){
    return knex.schema.dropTable('connections');
}