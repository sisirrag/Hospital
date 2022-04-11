const {Model} = require('objection');

class Dept extends Model{
    static get tableName(){
        return 'dept'
    }
}

module.exports = Dept;