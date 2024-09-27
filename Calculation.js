import mongoose from "mongoose";

const Calculation = new mongoose.Schema({
    author: {type: String, required: true},
    name: {type: String, required: true},
    hours: {type: Number, required: true},
    payment: {type: Number, required: true},
    materials: {type: Number, required: true},
    packaging: {type: Number},
    delivery: {type: Number},
    additional_costs: {type: Number},
    equipment: {type: Number},
    tax_rate: {type: Number},

});

export default mongoose.model('Calculation', Calculation);