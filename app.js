const sequelize = require('sequelize');
const config = require('./config/config');
const conexaoDB = new sequelize(config);

conexaoDB.query('SELECT * FROMT pets', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
    conexaoDB.close();
})
.cath((error) => {
    console.log(error);
});
