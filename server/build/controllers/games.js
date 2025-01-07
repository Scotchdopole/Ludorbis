"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGame = exports.updateGame = exports.createGame = exports.getAllGames = exports.getGameById = void 0;
const Games_1 = require("../models/Games");
const getGameById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const game = yield Games_1.Games.findByPk(id);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }
        res.status(200).json(game);
    }
    catch (error) {
        next(error);
    }
});
exports.getGameById = getGameById;
const getAllGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const games = yield Games_1.Games.findAll();
        res.status(200).json(games);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllGames = getAllGames;
const createGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, desc, platforms, developer, publisher, genres, gameModes, engine, coverImgPath, ytbTrailerLink } = req.body;
        const newGame = yield Games_1.Games.create({
            name,
            desc,
            platforms,
            developer,
            publisher,
            genres,
            gameModes,
            engine,
            coverImgPath,
            ytbTrailerLink
        });
        res.status(201).json(newGame);
    }
    catch (error) {
        next(error);
    }
});
exports.createGame = createGame;
const updateGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, desc, platforms, developer, publisher, genres, gameModes, engine, coverImgPath, ytbTrailerLink } = req.body;
        const game = yield Games_1.Games.findByPk(id);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }
        yield game.update({
            name,
            desc,
            platforms,
            developer,
            publisher,
            genres,
            gameModes,
            engine,
            coverImgPath,
            ytbTrailerLink
        });
        res.status(200).json(game);
    }
    catch (error) {
        next(error);
    }
});
exports.updateGame = updateGame;
const deleteGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const game = yield Games_1.Games.findByPk(id);
        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }
        yield game.destroy();
        res.status(200).json({ message: "Game deleted successfully" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteGame = deleteGame;
