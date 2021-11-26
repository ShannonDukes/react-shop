const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost/mernreactshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;