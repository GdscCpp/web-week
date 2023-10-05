import { Router } from "express";

import { executeCommand } from "@handlers/shell";

const shellRoutes = Router();

shellRoutes.post('/shell', executeCommand)

export {shellRoutes};
