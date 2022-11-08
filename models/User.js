const { Schema, model } = require('mongoose');
const {emailValidator} = require('../utils/helpers');


function dateFormat(timestamp) {
  return timestamp.toLocaleTimeString('en-US');
}
// Schema to create User model
const userSchema = new Schema(
  {
    username: { String, unique: "Enter a Unique Username", required: "Enter a Unique Username", trim: true },
    email: { String, unique: "Enter a Unique Email", required: "Enter a Unique Email", trim: true },
    validate: [emailValidator, "Enter a Valid Email"],
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thought',
                }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
                }],
    
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User