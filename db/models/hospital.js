const {Model} = require('objection');

class Hospital extends Model{
    static get tableName(){
        return 'hospital'
    }
}

module.exports = Hospital;