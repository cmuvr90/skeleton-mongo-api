import mongoose from "mongoose";
import Model from './index';

const FIELDS = {
  email: {
    type: String, default: null
  }
};

const Products = new Model(FIELDS);

export default mongoose.model('Products', Products);
