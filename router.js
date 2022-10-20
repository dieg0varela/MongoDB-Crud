/* Funciones del controlador Ticket */
const { getAdmins, getAdminByID, createAdmin, updateAdmin, deleteAdmin } = require("./controllers/Admin");
const { createTicket, getTickets, updateTicket, deleteTicket, getTicketByID } = require("./controllers/Ticket");
const { getUsuarios, getUsuarioByID, createUsuario, updateUsuario, deleteUsuario } = require("./controllers/Usuario");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/hola", (req, res) => {
    res.send("Let's build a CRUD API! HOLAAAAAA ");
  });


/* Endpoints para probar tickets */
router.get("/tickets", getTickets);
router.get("/tickets/:ticketID", getTicketByID);
router.post("/tickets", createTicket);
router.put("/tickets/:ticketID", updateTicket);
router.delete("/tickets/:ticketID", deleteTicket);

/* Endpoints para probar Usuarios */
router.get("/usuarios", getUsuarios);
router.get("/usuarios/:usuarioID", getUsuarioByID);
router.post("/usuarios", createUsuario);
router.put("/usuarios/:usuarioID", updateUsuario);
router.delete("/usuarios/:usuarioID", deleteUsuario);

/* Endpoints para probar Admin */
router.get("/admins", getAdmins);
router.get("/admins/:adminID", getAdminByID);
router.post("/admins", createAdmin);
router.put("/admins/:adminID",updateAdmin);
router.delete("/admins/:adminID", deleteAdmin);



module.exports = router;