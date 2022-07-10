import express from 'express';
import app_config from './config/index.js';
import routerMarcas from './routes/marcas.route.js';

const port = app_config.port
const app = express();

// middlewares necesarios para la app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Definicion de las rutas de la api
app.use('/marcas',routerMarcas);


app.listen(port, () => {
    console.log(`Server on port ${port}`);
})