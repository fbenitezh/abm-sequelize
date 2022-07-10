import { model as MarcaModel } from '../models/MarcaModel.js';


class MarcaService {
    constructor() {
        this.PARAM_ID = "id";
        this.PARAM_NAME = "name";
    }

    async find() {
        try {
            const data = await MarcaModel.findAll();
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async read(id) {
        try {
            const data = await MarcaModel.findOne({
                where: {
                    id
                }
            })
            return data;
        } catch (error) {
            throw new Error(error);
        }
    }

    async create(body) {
        try {
            const insert = await MarcaModel.create({
                name: body[this.PARAM_NAME]
            });
            return insert;
        } catch (error) {
            throw new Error(error);
        }
    }

    async update(body, id) {
        try {
            const update = await MarcaModel.update({
                name: body[this.PARAM_NAME]
            }, {
                where: {
                    id
                }
            });
            return update;
        } catch (error) {
            throw new Error(error);
        }
    }


    async delete(id) {
        try {
            const res = await MarcaModel.destroy({
                where: {
                    id
                }
            })
            return res;
        } catch (error) {
            throw new Error(error);
        }
    }


}

export default MarcaService;