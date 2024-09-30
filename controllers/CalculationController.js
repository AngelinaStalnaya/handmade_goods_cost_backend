import CalculationService from "../services/CalculationService.js";

class CalculationController {
  async create(req, res) {
    try {
      const calculation = await CalculationService.create(req.body);
      res.json(calculation);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getAll(req, res) {
    try {
      const calculations = await CalculationService.getAll();
      return res.json(calculations);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async getOne(req, res) {
    try {
      const calculationData = await CalculationService.getOne(req.params.id);
      return res.json(calculationData);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    try {
      const updatedCalculation = await CalculationService.update(req.body);
      return res.json(updatedCalculation);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    try {
        const deletedCalculation = await CalculationService.delete(req.params.id);
        return res.json(deletedCalculation);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}

export default new CalculationController();
