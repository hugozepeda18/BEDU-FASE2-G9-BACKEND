const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4001;
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use('/v1', require('./routes'));