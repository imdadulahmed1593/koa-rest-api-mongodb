//Import Koa
const Koa = require("Koa");
//Import body-parser
const bodyParser = require("koa-bodyparser");
//Importing the routes
const productRoutes = require("./routes/products.routes");

//Start App
const app = new Koa();
const PORT = 3000;

//Using body parser
app.use(bodyParser());

//Registering the routes
// app.use(productRoutes.routes()).use(productRoutes.allowedMethods());

//Setup the port
app.listen(PORT, () => {
  console.log(`Application is listening on port ${PORT}`);
});
