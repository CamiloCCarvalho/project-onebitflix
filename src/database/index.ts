// src/database/index.ts


import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix_development',
    username: 'onebitflix',
    password: 'onebitflix',
    define: {
        //faz o snake_case do SQL vir como camelCase no js
        underscored: true, 
    }
})
    