import { Router } from "express";

import {shellRoutes } from './shell'
import { uploadRoutes } from "./upload";
import { userRoutes } from "./user";

const routes = Router();

routes.use(userRoutes)
routes.use(uploadRoutes)
routes.use(shellRoutes)

export default routes;