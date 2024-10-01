import Router from "express";
import CalculationController from "../controllers/CalculationController.js";
const calculationRouter = new Router();

calculationRouter.post("/calculations", CalculationController.create);
calculationRouter.get("/calculations/:id", CalculationController.getAll);
calculationRouter.get('/calculations/:id', CalculationController.getOne)
calculationRouter.put('/calculations/:id', CalculationController.update)
calculationRouter.delete('/calculations/:id', CalculationController.delete)

export default calculationRouter;
