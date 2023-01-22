import mongoose from "mongoose";
import Model from './index';

const FIELDS = {
  email: {
    type: String, default: null
  }
};

const Collections = new Model(FIELDS);

export default mongoose.model('Collections', Collections);
