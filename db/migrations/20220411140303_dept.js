/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('dept',table => { 
        table.increments('id');   
        table.integer('branch_id').notNullable().references('id').inTable('branch');     
        table.string('dept_name').notNullable();        
        table.timestamps(true,true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('dept');
  
};
