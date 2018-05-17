import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CarSchema = new Schema({
  role: {
    type: String,
    default: 'user'
  },
  name: String,
  price: Number,
  imgSrc: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// hidden some field
CarSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id
    delete ret._id
    delete ret.id
  }
}
mongoose.model('Car', CarSchema)
