import Knex from 'knex';

// Criando tabela
export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();
        
        
        // Criando um relacionamento com a tabela users, cada aula terá um professor
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}
// Excluindo tabela caso algo ocorra errado
export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}