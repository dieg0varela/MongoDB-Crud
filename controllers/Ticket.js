const Ticket = require("../models/Ticket");

/* getTickets: Devuelte todos los tickets de la BD*/
const getTickets = (req, res) => {
    Ticket.find((err, tickets) => {
      if (err) {
        res.send(err);
      }
      res.json(tickets);
    });
  };

  /* getTicketByID: Devuelte un ticket identificado por su ID */
  const getTicketByID = (req, res) => {
    Ticket.findById(req.params.ticketID,
    (err, ticket) => {
      if (err) {
        res.send(err);
      }
      res.json(ticket);
    });
  };

  /* createTicket: Crea un nuevo ticket en la BD*/
  const createTicket = (req, res) => {
    const ticket = new Ticket({
      NombreEmisor: req.body.NombreEmisor,
      IdEmisor: req.body.IdEmisor,
      IdUsuario: req.body.IdUsuario,
      ImporteTotal: req.body.ImporteTotal,
      FechayHora: req.body.FechayHora,
      FormadePago: req.body.FormadePago,
      Productos: req.body.Productos
    });
  
    ticket.save((err, ticket) => {
      if (err) {
        res.send(err);
      }
      console.log(ticket)
      res.json(ticket);
    });
  };

  /* updateTicket: Recibe el ID de un ticket y actualiza sus datos */
  const updateTicket = (req, res) => {
    Ticket.findOneAndUpdate(
      { _id: req.params.ticketID },
      {
        $set: {
            NombreEmisor: req.body.NombreEmisor,
            IdEmisor: req.body.IdEmisor,
            IdUsuario: req.body.IdUsuario,
            ImporteTotal: req.body.ImporteTotal,
            FechayHora: req.body.FechayHora,
            FormadePago: req.body.FormadePago,
            Productos: req.body.Productos
        },
      },
      { new: true },
      (err, Ticket) => {
        if (err) {
          res.send(err);
        } else res.json(Ticket);
      }
    );
  };

  /* deleteTicket: Recibe el ID de un ticket y lo elimina de la BD */
  const deleteTicket = (req, res) => {
    Ticket.deleteOne({ _id: req.params.ticketID })
      .then(() => res.json({ message: "Ticket Deleted" }))
      .catch((err) => res.send(err));
  };
  
  module.exports = {
    getTickets,
    getTicketByID,
    createTicket,
    updateTicket,
    deleteTicket,
  };