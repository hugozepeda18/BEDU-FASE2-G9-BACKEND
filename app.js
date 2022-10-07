const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use('/v1', require('./routes'));