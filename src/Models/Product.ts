import mongoose, {Schema, Document} from 'mongoose';

export interface ProductInterface extends Document {
  title: string;
  author: string;
}

const ProductSchema: Schema = new Schema({
  title: {type: String, required: true},
  price: {type: Number, required: true},
  description: {type: String, required: true},
  imageUrl: {type: String, required: true}
});

const Product = mongoose.model<ProductInterface>('Product', ProductSchema);
export default Product;
