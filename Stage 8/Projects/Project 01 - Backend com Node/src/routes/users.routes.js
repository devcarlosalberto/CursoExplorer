const usersRoutes = require("express").Router();
const UsersController = require("../controllers/UsersController");
const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update);

module.exports = usersRoutes;