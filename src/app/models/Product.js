const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const ProduceSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String },
  price: { type: Number },
  salePrice: { type: Number },
  image: [{
    data: Buffer,
    contentType: String
  }],
  brand: { type: String },
  country: { type: String },
  slug: { type: String, slug: 'name', unique: true },
},
  {
    // _id: false,
    timestamps: true,
  });

ProduceSchema.statics = {
  addProduct(item) {
    return this.create(item);
  }
}

// Add plugin
mongoose.plugin(slug);

module.exports = mongoose.model('Produce', ProduceSchema);
