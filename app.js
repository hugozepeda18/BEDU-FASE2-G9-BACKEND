require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const swaggerOptions = require('./config/swagger');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
  app.get('/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocs);
  }
);

app.use(express.json());
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/v1', require('./routes'));

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});