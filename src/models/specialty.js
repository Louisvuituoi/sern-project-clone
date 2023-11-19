'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here: định danh các mqh
        }
    };
    Specialty.init({
        name: DataTypes.STRING,
        //trong model không cần khai báo primarykey (id)
        description: DataTypes.TEXT,
        image: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Specialty',
    });
    return Specialty;
};