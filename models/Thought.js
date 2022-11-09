const { Schema, model } = require('mongoose');
const {dateFormat} = require('../utils/helpers');
const Reaction = require('./Reaction');


const thoughtSchema = new Schema(
  {
    thoughtText: { type: String, required: "Enter a thoughtText", minLength: 1, maxLength: 280 },
    createdAt: { type: Date, default: Date.now, get: (thoughtTimeStamp) => dateFormat(thoughtTimeStamp) }, 
    username: { type: String, required: "Enter a Unique Username" },
    reactions: [Reaction],
    
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

