import { Request, Response } from "express";

export const indexGetHandler = (req: Request, res: Response) => {
  res.sendStatus(200);
}