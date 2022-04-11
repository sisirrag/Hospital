/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.createTable('branch',table => { 
        table.increments('id');
        table.integer('hospital_id').notNullable().references('id').inTable('hospital');        
        table.string('branch_name').notNullable();
        table.string('branch_address').notNullable();
        table.timestamps(true,true);
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {

    return knex.schema.dropTable('branch');
  
};
