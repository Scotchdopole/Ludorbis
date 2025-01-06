import express from "express";
const router = express.Router();

import * as controller from "../controllers/games"

router.get("/", controller.getAllGames);
router.get("/:id",controller.getGameById);
router.post("/",controller.createGame);
router.put("/:id",controller.updateGame);
router.delete("/:id",controller.deleteGame);

module.exports = router;
