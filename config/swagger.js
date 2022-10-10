const options = {
    swaggerDefinition: {
        info: {
            title: "Bedu-Shop API",
            version: "1.0.0",
            description: 'This documentation is to show how the API is built.'
        }
    },
    apis: ['./routes/*.js']
}

module.exports = options;
