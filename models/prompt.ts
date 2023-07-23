import { Schema, model, models, Model } from 'mongoose'

const PromptSchema: Schema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required!']
  },
  tag: {
    type: String,
    required: [true, 'Tag is required!']
  }
})
const Prompt: Model<Schema> = models.Prompt || model('Prompt', PromptSchema)

export default Prompt