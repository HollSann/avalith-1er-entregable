import express from 'express';
import getDate from './src/middlewares/date.js';
import errorHandler from './src/middlewares/errorHandler.js'
import cartRoutes from './src/routes/cart.routes.js';
import indexRoutes from './src/routes/index.routes.js';
import productsRoutes from './src/routes/products.routes.js';
import usersRoutes from './src/routes/users.routes.js';

const app = express();
const port = 3000;

//Date Middleware
app.use(getDate)

//Routes
app.use(indexRoutes, productsRoutes, usersRoutes, cartRoutes);

//Error handler
app.use(errorHandler)

//Servidor(3000)
app.listen(port, () => {
    console.log(`Server listening in port ${port}`)
});

