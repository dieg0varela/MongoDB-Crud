const Admin = require("../models/Admin");

/* getTickets: Devuelte todos los tickets de la BD*/
const getAdmins = (req, res) => {
    Admin.find((err, admin) => {
      if (err) {
        res.send(err);
      }
      res.json(admin);
    });
  };

  /* getTicketByID: Devuelte un ticket identificado por su ID 
  */
  const getAdminByID = (req, res) => {
    Admin.findById(req.params.adminID,
    (err, usuario) => {
      if (err) {
        res.send(err);
      }
      res.json(usuario);
    });
  };

  /* createTicket: Crea un nuevo ticket en la BD*/
  const createAdmin = (req, res) => {
    const admin = new Admin({
      Nombre: req.body.Nombre,
      Email: req.body.Email,
      Pass: req.body.Pass,
    });
  
    admin.save((err, admin) => {
      if (err) {
        res.send(err);
      }
      console.log(admin)
      res.json(admin);
    });
  };

  /* updateTicket: Recibe el ID de un ticket y actualiza sus datos */
  const updateAdmin = (req, res) => {
    Admin.findOneAndUpdate(
      { _id: req.params.adminID },
      {
        $set: {
            Nombre: req.body.Nombre,
            Email: req.body.Email,
            Pass: req.body.Pass,
        },
      },
      { new: true },
      (err, admin) => {
        if (err) {
          res.send(err);
        } else res.json(admin);
      }
    );
  };

  /* deleteTicket: Recibe el ID de un ticket y lo elimina de la BD */
  const deleteAdmin = (req, res) => {
    Admin.deleteOne({ _id: req.params.adminID })
      .then(() => res.json({ message: "Admin Deleted" }))
      .catch((err) => res.send(err));
  };
  
  module.exports = {
    getAdmins,
    getAdminByID,
    createAdmin,
    updateAdmin,
    deleteAdmin,
  };