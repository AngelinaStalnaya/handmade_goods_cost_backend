import Router from "express";
import Calculation from "./Calculation.js";

const router = new Router();

router.post("/", async (req, res) => {
  try {
    const { author, name, hours, payment, materials } = req.body;
    const calculation = await Calculation.create({
      author,
      name,
      hours,
      payment,
      materials,
    });
    res.json(calculation);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
