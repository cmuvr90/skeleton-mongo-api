import mongoose from "mongoose";
import Model from './index';

const FIELDS = {
  email: {
    type: String, default: null
  }
};

const Brands = new Model(FIELDS);

export default mongoose.model('Brands', Brands);
