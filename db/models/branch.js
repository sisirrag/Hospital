const {Model} = require('objection');
const Dept = require('./dept');

class Branch extends Model{
    static get tableName(){
        return 'branch'
    }
    static get relationMappings(){
        return {
            depts: {
                relation: Model.HasManyRelation,
                modelClass: Dept,
                join: {
                    from: 'branch.id',
                    to: 'dept.branch_id'
                }
            }
        }
    }
}

module.exports = Branch;