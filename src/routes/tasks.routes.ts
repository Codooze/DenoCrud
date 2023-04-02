import { Router } from "npm:express";
import { Request } from "npm:express/lib/request";
import { Response } from "npm:express/lib/response";
import {
  getTask,
  getTasks,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.ts";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

export default router;
