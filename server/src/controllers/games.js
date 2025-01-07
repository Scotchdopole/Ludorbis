import { Request, Response, NextFunction } from "express"
import { Games } from "../models/Games";


export const getGameById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const game = await Games.findByPk(id);

        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        res.status(200).json(game);
    } catch (error) {
        next(error);
    }
};


export const getAllGames = async (req, res, next) => {
    try {
        const games = await Games.findAll();
        res.status(200).json(games);
    } catch (error) {
        next(error);
    }
};


export const createGame = async (req, res, next) => {
    try {
        const {
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
        } = req.body;


        const newGame = await Games.create({
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
    } catch (error) {
        next(error);
    }
};


export const updateGame = async (req, res, next) => {
    try {
        const { id } = req.params;
        const {
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
        } = req.body;

        const game = await Games.findByPk(id);

        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        await game.update({
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
    } catch (error) {
        next(error);
    }
};


export const deleteGame = async (req, res, next) => {
    try {
        const { id } = req.params;

        const game = await Games.findByPk(id);

        if (!game) {
            return res.status(404).json({ message: "Game not found" });
        }

        await game.destroy();
        res.status(200).json({ message: "Game deleted successfully" });
    } catch (error) {
        next(error);
    }
};