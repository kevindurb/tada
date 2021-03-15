import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('todos', (table) => {
    table.increments('id');
    table.string('description');
    table.timestamp('done').nullable();
    table.timestamp('created').notNullable().defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await  knex.schema.dropTableIfExists('todos');
}
