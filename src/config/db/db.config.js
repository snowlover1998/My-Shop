const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost:27017/my_shop_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect database successfully!');
    }
    catch (error) {
        console.log('Connect database failure!');
    }
}

module.exports = { connect };