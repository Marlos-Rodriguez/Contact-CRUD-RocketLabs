import {model, Schema, Model, Document} from "mongoose"

export interface IContact extends Document {
  name: string,
  nickname: string,
  email: string,
  createAt: Date
}

const contactSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  nickname: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Contact: Model<IContact> = model("Contact", contactSchema);

export default Contact