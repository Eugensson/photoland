import slugify from "slugify";
import { Document, Model, model, models, Schema } from "mongoose";

import { IProductInput } from "@/types";

export interface IProduct extends Document, IProductInput {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    images: [String],
    brand: { type: String, required: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
  },
  { timestamps: true, versionKey: false }
);

productSchema.pre<IProduct>("save", function (next) {
  if (this.name && !this.slug) {
    this.slug = slugify(this.name, { lower: true }) + "-" + Date.now();
  }
  next();
});

export const Product =
  (models.Product as Model<IProduct>) ||
  model<IProduct>("Product", productSchema);
