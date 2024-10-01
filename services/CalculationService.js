import Calculation from "../models/Calculation.js";

class CalculationService {
  async create(calculation) {
    const createdCalculation = await Calculation.create(calculation);
    return createdCalculation;
}

  async getAll(id) {
    if (!id) {
      throw new Error('The is no ID');
    }
    const calculations = await Calculation.findById(id);
    return calculations;
  }
 
  async getOne(id) {
    
    const calculationData = await Calculation.findById(id);
    return calculationData;
  }

  async update(calculation) {
    if (!calculation._id) {
      throw new Error('The is no ID');
    }
    const updatedCalculation = await Calculation.findByIdAndUpdate(
      calculation._id,
      calculation,
      { new: true }
    );
    return updatedCalculation;
  }

  async delete(id) {
    if (!id) {
        throw new Error('The is no ID');
    }
    const deletedCalculation = await Calculation.findByIdAndDelete(id);
    return deletedCalculation;
  }
}

export default new CalculationService();

