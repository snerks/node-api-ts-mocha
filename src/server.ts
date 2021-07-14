import express, { Application } from "express";
import routes from "./routes";

const createServer = () => {
  const app: Application = express();

  app.use(routes);

  return app;
}

export default createServer;
