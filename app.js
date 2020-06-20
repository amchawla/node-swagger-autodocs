const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();

const port = process.env.PORT || 5000;

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Customer API",
            description: "Customer API Information",
            contact: {
                name: "amazing developers"
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//Routes
/**
 * @swagger
 * /Customers:
 *  get:
 *      description: Use to request all customers
 *      responses:
 *          "200":
 *              description:A successful response
 */
app.get('/Customers', (req, res) => {
    res.send("Customer Results");
});

/**
 * @swagger
 * /Customer:
 *  put:
 *      description: Use to update a customers
 *      responses:
 *          "201":
 *              description:A successful response
 */
app.put('/Customer', (req, res) => {
    res.send("Updated the customer record");
});
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});