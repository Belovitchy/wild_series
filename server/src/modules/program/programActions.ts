import type { RequestHandler } from "express";
import programRepository from "./programRepository";

// Declare the action

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programs = await programRepository.readAll();
    res.json(programs);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const programdId = Number(req.params.id);
    const program = await programRepository.read(programdId);
    if (program == null) {
      res.sendStatus(404);
    } else {
      res.json(program);
    }
  } catch (err) {
    next(err);
  }
};

// Export it to import it somewhere else

export default { browse, read };
