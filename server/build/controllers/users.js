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
exports.deleteGame = exports.updateGame = exports.createGame = exports.getGameById = exports.getAllGames = void 0;
const getAllGames = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAllGames = getAllGames;
const getGameById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.getGameById = getGameById;
const createGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.createGame = createGame;
const updateGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.updateGame = updateGame;
const deleteGame = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () { });
exports.deleteGame = deleteGame;
