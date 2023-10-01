import { Router } from "express";

import { handler } from "@handlers/index";

const userRoutes = Router()

// normally we would add a validator here as we;;
userRoutes.post('/login', handler.login)

export {userRoutes};