'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor_Clinic_Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here: định danh các mqh
        }
    };
    Doctor_Clinic_Specialty.init({
        //trong model không cần khai báo primarykey (id)
        doctorId: DataTypes.INTEGER,
        clinicID: DataTypes.INTEGER,
        specialtyID: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Doctor_Clinic_Specialty',
    });
    return Doctor_Clinic_Specialty;
};