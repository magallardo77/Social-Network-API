const { Schema, Types } = require('mongoose');

// Schema to create User model
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: { type: String, required: "Enter a Reaction", maxLength: 280}, 
    username: { type: String, required: "Enter a Unique Username" },
    createdAt: { type: Date, default: Date.now, get: (thoughtTimeStamp) => dateFormat(thoughtTimeStamp) }
  });



module.exports = reactionSchema