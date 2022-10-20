const mongoose = require("mongoose");
const Double = require('@mongoosejs/double');

const TicketSchema = new mongoose.Schema({
  NombreEmisor: {
    type: String,
  },
  IdEmisor: {
    type: String,
    required: true,
    minLength: [12, "RUT invalido"], /* Esto tomando en cuenta que se usara el RUT como IdEmisor */
    maxLength: 12
  },
  IdUsuario: {
    type: String,
    required: true,
    minLength: 9, /* Esto tomando en cuenta que se usara el celular como IdUsuario */
    maxLength: 9
  },
  ImporteTotal: {
    type: Double,
    required: true,
    min: [1, "Importe invalido"],
  },
  FechayHora: {
    type: Date,
    required: true,
  },
  FormadePago: {
    type: String,
    required: true, /* Posible enum: ["Efectivo", "Credito", "Debito"] para validar forma de pago */
  },
  Productos: [{
    Item: String,
    Monto: Double,
    Cantidad: Number,
  }],
});

module.exports = mongoose.model("Ticket", TicketSchema);