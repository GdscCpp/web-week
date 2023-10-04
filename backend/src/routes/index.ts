import { Router } from "express";

import { uploadRoutes } from "./upload";
import { userRoutes } from "./user";

const routes = Router();

routes.use(userRoutes)
routes.use(uploadRoutes)

export default routes;