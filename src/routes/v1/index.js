const usersController = require('../../controllers/v1/users-controller');
const productsController = require('../../controllers/v1/products-controller');


const createRoutesv1 = (app) => {
    app.get('/api/v1/users', usersController.getUsers);
    app.get('/api/v1/users/:userId', usersController.getUserById);
    app.get('/api/v1/products', productsController.getProducts);
    app.get('/api/v1/products/:productId', productsController.getProductsById);
    app.post('/api/v1/products/create', productsController.createProduct);
    app.put('/api/v1/products/:productId', productsController.updateProduct);
    app.patch('/api/v1/products/:productId', productsController.partialUpdateProduct);
    app.delete('/api/v1/products/:productId', productsController.deleteProductById);






};

module.exports = createRoutesv1;