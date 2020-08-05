import Knex from 'knex';

// Criando tabela
export async function up(knex: Knex){
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();
    });
}
// Excluindo tabela caso algo ocorra errado
export async function down(knex: Knex){
    return knex.schema.dropTable('users');
}