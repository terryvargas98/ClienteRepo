const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
const db = mongoose.connect('mongodb://root:example@mongo/producto?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

}).then(db => console.log('Db is connected' + db.connection.host)).catch(err => console.log(err));


exports.module = mongoose;