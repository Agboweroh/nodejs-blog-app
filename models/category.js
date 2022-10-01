const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }
},



    { timeStamps: true },

)

module.exports = mongoose.model("Categories", categorieSchema);