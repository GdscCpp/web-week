/* tslint:disable:ordered-imports */
import express from "express";
import { logger } from './lib/logger';

const app = express();

const port = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.listen(port, () => {
  logger.info(`Running on ${port}`);
});
