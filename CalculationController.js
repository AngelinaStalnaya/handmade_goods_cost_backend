import Calculation from "./Calculation.js";

class CalculationController {
  async create(req, res) {
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
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const calculations = await Calculation.find();
      return res.json(calculations);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: "There is no id" });
      }
      const calculationData = await Calculation.findById(id);
      return res.json(calculationData);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const calculation = req.body;
      if (!calculation._id) {
        res.status(400).json({ message: "There is no id" });
      }
      const updatedCalculation = await Calculation.findByIdAndUpdate(calculation._id, calculation, {new: true})
      return res.json(updatedCalculation);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(400).json({ message: "There is no id" });
          }
        const deletedCalculation = await Calculation.findByIdAndDelete(id);
        return res.json(deletedCalculation);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new CalculationController();
