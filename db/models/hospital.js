const {Model} = require('objection');
const Branch = require('./branch');

class Hospital extends Model{
    static get tableName(){
        return 'hospital'
    }
    static get relationMappings(){
        return {
            branches: {
                relation: Model.HasManyRelation,
                modelClass: Branch,
                join: {
                    from: 'hospital.id',
                    to: 'branch.hospital_id'
                }
            }
        }
    }
}

module.exports = Hospital;