import MarcaService from "../services/MarcaService.js";

class MarcaController {

    /**
     * Lista todos los registros de la tabla
     * @param {Request} req 
     * @param {Response} res 
     */
    async find(req, res) {
        try {
            const service = new MarcaService();
            const data = await service.find();
            res.status(200).json({
                ok: true,
                data
            });
        } catch (error) {
            res.status(400).json({
                ok: false,
                error: error.message
            })
        }
    }

    /**
     * Lee un registro de la tabla por id
     * @param {Request} req 
     * @param {Response} res 
     */
    async read(req, res) {
        try {
            const { id } = req.params;
            const service = new MarcaService();
            const data = await service.read(id);
            res.status(200).json({
                ok: true,
                data
            });
        } catch (error) {
            res.status(400).json({
                ok: false,
                error: error.message
            })
        }
    }

    /**
     * Crea un registro
     * @param {Request} req 
     * @param {Response} res 
     */
    async create(req, res) {
        try {
            const service = new MarcaService();
            const { body } = req;
            const result = await service.create(body);
            res.status(200).json({
                ok: true,
                info: result
            });
        } catch (error) {
            res.status(400).json({
                ok: false,
                error: error.message
            })
        }
    }

    /**
     * Modifica un registro de la tabla
     * @param {Request} req 
     * @param {Response} res 
     */
    async update(req, res) {
        try {
            const service = new MarcaService();
            const { body, params: { id } } = req;
            const result = await service.update(body, id);
            res.status(200).json({
                ok: true,
                info: result
            });
        } catch (error) {
            res.status(400).json({
                ok: false,
                error: error.message
            })
        }
    }

    /**
     * Elimina un registro de la tabla
     * @param {Request} req 
     * @param {Response} res 
     */
    async delete(req, res) {
        try {
            const service = new MarcaService();
            const { params: { id } } = req;
            const result = await service.delete(id);
            res.status(200).json({
                ok: true,
                info: result
            });
        } catch (error) {
            res.status(400).json({
                ok: false,
                error: error.message
            })
        }
    }

}

export default MarcaController;