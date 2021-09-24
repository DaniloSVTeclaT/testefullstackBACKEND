import {  Router } from "express";
import users_bv_Router from "./user.routes";
import tasks_Router from "./tasks.routes";
import sessions from "./sessions.routes";


const routes = Router()

routes.use('/users',users_bv_Router)
routes.use('/tasks',tasks_Router)
routes.use('/sessions',sessions)



export default routes
