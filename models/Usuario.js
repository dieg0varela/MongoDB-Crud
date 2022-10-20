const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    IdUsuario: {
        type: String,
        required: true,
    },
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


module.exports = mongoose.model("Usuario", UsuarioSchema);