import { Sequelize } from 'sequelize';
import app_config from '../config/index.js';

class DB {
    constructor() {
        this.host = app_config.db.host;
        this.db = app_config.db.name;
        this.user = app_config.db.user;
        this.pass = app_config.db.pass;
        this.server = app_config.db.server;
        this.sequelize = null;
    }


    connect() {
        try {
            this.sequelize = new Sequelize(this.db, this.user, this.pass, {
                host: this.host,
                dialect: this.server
            });
            console.log("connected to db");
        } catch (error) {
            throw new Error(error);
        }
    }

    async testConnection() {
        try {
            const test = await this.sequelize.authenticate();
            return test;
        } catch (error) {
            throw new Error(error);
        }
    }

}

export default DB;