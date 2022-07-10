import { DataTypes, Model } from "sequelize";
import DB from '../lib/DB.js';
const con = new DB();
con.connect();

class MarcaModel extends Model { }

export const model = MarcaModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: con.sequelize,
    modelName: 'marcas'
})
