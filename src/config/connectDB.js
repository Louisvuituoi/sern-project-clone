const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('anthinhtestdb', 'root', null, {
    //host: điền địa chỉ OP, server
    host: 'localhost',
    dialect: 'mysql',
    //disable export log SELECT 1+1 AS result
    logging: false
});

// async await -> hàm bất đồng bộ
let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;

