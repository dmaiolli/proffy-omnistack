
import Knex from 'knex';

// Criando tabela
export async function up(knex: Knex){
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary(); // Increments += 1
        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();

        // Criando um relacionamento com a tabela users, cada cronograma está para uma aula
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}
// Excluindo tabela caso algo ocorra errado
export async function down(knex: Knex){
    return knex.schema.dropTable('classes_schedule');
}