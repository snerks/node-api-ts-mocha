import { Router } from "express";
import homeRouter from "./home/homeRouter";
import authRouter from "./auth/authRouter";

const router = Router();

router.use("/", homeRouter);
router.use("/auth", authRouter);

export default router;
