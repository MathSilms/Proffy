import Knex from 'knex';

export async function up(knex:Knex) {
    return knex.schema.createTable('users',t =>{
        t.increments('id').primary();
        t.string('name').notNullable();
        t.string('avatar').notNullable();
        t.string('whatsapp').notNullable();
        t.string('bio').notNullable();
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('users');
}