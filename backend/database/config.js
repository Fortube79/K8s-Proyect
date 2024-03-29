const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.connect('mongodb+srv://fortube:mongopass@cluster0.kafsrzg.mongodb.net/mascotas', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos conectada');
    } catch (err) {
        console.log(err);
        throw new Error('Error al conectar con la base de datos');
    }
}

module.exports = {
    dbConnection
}