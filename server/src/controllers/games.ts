import { Request, Response, NextFunction } from "express"
import { Games } from "../models/Games";

export const getAllGames = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const games = await Games.findAll();
        res.status(200).json(games);
    } catch (error) {
        next(error);
    }
}
export const getGameById = async (req: Request, res: Response, next: NextFunction) => { }
export const createGame = async (req: Request, res: Response, next: NextFunction) => { }
export const updateGame = async (req: Request, res: Response, next: NextFunction) => { }
export const deleteGame = async (req: Request, res: Response, next: NextFunction) => { }

