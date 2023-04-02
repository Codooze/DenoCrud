import { Request, Response } from "npm:express";

export const getTasks = (req: Request, res: Response) => {
  res.send("getting tasks yeah");
};

export const getTask = (req: Request, res: Response) => {
  res.send("getting task yeah");
};

export const createTask = (req: Request, res: Response) => {
  res.send("creating task yeah");
};

export const deleteTask = (req: Request, res: Response) => {
  res.send("deleting task yeah");
};

export const updateTask = (req: Request, res: Response) => {
  res.send("updating task yeah");
};
