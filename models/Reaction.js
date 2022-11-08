const { Schema, model } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: { type: Schema.Types.ObjectId, default: new Schema.Types.ObjectId() },
    reactionBody: { String, required: "Enter a Reaction", maxLength: 280}, 
    username: { String, required: "Enter a Unique Username" },
    createdAt: { type: Date, default: Date.now, get: (thoughtTimeStamp) => dateFormat(thoughtTimeStamp) }
  });

const Reaction = model('reactions', reactionSchema);

module.exports = Reaction