import Knex from 'knex';

// Criando tabela
export async function up(knex: Knex){
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        // Criando um relacionamento com a tabela users, cada aula terá um professor
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}
// Excluindo tabela caso algo ocorra errado
export async function down(knex: Knex){
    return knex.schema.dropTable('classes');
}