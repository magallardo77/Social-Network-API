const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: { String, unique: "Enter a Unique Username", required: "Enter a Unique Username", trim: true },
    email: { String, unique: "Enter a Unique Email", required: "Enter a Unique Email", trim: true },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
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