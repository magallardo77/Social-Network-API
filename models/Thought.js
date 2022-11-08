const { Schema, model } = require('mongoose');
const {dateFormat} = require('../utils/helpers');


const thoughtSchema = new Schema(
  {
    thoughtText: { String, required: "Enter a thoughtText", minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: (thoughtTimeStamp) => dateFormat(thoughtTimeStamp) }, 
    username: { String, required: "Enter a Unique Username" },
    reactions: [{
        type: Schema.Types.ObjectId,
        ref: 'reactions',
                }],
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought

