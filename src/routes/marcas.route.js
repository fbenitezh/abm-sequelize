import express from 'express';
import MarcaController from '../controllers/MarcaController.js';
const router = express.Router();
const controller = new MarcaController();

router.get('/', controller.find);
router.get('/:id', controller.read);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.delete);


export default router;