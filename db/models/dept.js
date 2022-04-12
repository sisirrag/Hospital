const {Model} = require('objection');
const Branch = require('./branch');

class Dept extends Model{
    static get tableName(){
        return 'dept'
    }
    
}

module.exports = Dept;