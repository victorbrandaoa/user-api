import Sequelize from 'sequelize';

import dbConfig from './config/databaseConfig'

const {database, username, password, options} = dbConfig
const sequelize = new Sequelize(database, username, password, options);

export default sequelize;
