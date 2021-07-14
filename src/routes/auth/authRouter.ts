import { Router } from "express";
import { indexGetHandler } from "./authController";

const router = Router();

router.get("/", indexGetHandler);

export default router;
