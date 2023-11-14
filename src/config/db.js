const mongoose = require('mongoose')
const uriLocal = "mongodb://127.0.0.1:27017/tienda";
const uriRemota = "mongodb+srv://iamevelynherrera:Matthew07@cluster0.o7ebusq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uriRemota)

module.exports = mongoose;