import Router from "express";
import CalculationController from "../controllers/CalculationController.js";
const router = new Router();

router.post("/calculations", CalculationController.create);
router.get("/calculations", CalculationController.getAll);
router.get('/calculations/:id', CalculationController.getOne)
router.put('/calculations/:id', CalculationController.update)
router.delete('/calculations/:id', CalculationController.delete)

export default router;
