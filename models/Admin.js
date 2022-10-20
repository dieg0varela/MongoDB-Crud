const mongoose = require("mongoose");

const AdministracionSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Pass: {
        type: String,
        required: true,
    }
});


module.exports = mongoose.model("Admin", AdministracionSchema);