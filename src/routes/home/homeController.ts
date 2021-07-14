import { Request, Response } from "express";

export const indexGetHandler = (req: Request, res: Response) => {
  res.send("Hello World");
}
