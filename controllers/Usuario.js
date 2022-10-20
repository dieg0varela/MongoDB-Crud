const Usuario = require("../models/Usuario");

/* getTickets: Devuelte todos los tickets de la BD*/
const getUsuarios = (req, res) => {
    Usuario.find((err, usuario) => {
      if (err) {
        res.send(err);
      }
      res.json(usuario);
    });
  };

  /* getTicketByID: Devuelte un ticket identificado por su ID */
  const getUsuarioByID = (req, res) => {
    Usuario.findById(req.params.usuarioID,
    (err, usuario) => {
      if (err) {
        res.send(err);
      }
      res.json(usuario);
    });
  };

  /* createTicket: Crea un nuevo ticket en la BD*/
  const createUsuario = (req, res) => {
    const usuario = new Usuario({
      IdUsuario: req.body.IdUsuario,
      Nombre: req.body.Nombre,
      Email: req.body.Email,
      Pass: req.body.Pass,
    });
  
    usuario.save((err, usuario) => {
      if (err) {
        res.send(err);
      }
      console.log(usuario)
      res.json(usuario);
    });
  };

  /* updateTicket: Recibe el ID de un ticket y actualiza sus datos */
  const updateUsuario = (req, res) => {
    Usuario.findOneAndUpdate(
      { _id: req.params.usuarioID },
      {
        $set: {
            IdUsuario: req.body.IdUsuario,
            Nombre: req.body.Nombre,
            Email: req.body.Email,
            Pass: req.body.Pass,
        },
      },
      { new: true },
      (err, Usuario) => {
        if (err) {
          res.send(err);
        } else res.json(Usuario);
      }
    );
  };

  /* deleteTicket: Recibe el ID de un ticket y lo elimina de la BD */
  const deleteUsuario = (req, res) => {
    Usuario.deleteOne({ _id: req.params.usuarioID })
      .then(() => res.json({ message: "Usuario Deleted" }))
      .catch((err) => res.send(err));
  };
  
  module.exports = {
    getUsuarios,
    getUsuarioByID,
    createUsuario,
    updateUsuario,
    deleteUsuario,
  };