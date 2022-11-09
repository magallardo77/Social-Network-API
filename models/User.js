const { Schema, model } = require('mongoose');
const {emailValidate} = require('../utils/helpers');


function dateFormat(timestamp) {
  return timestamp.toLocaleTimetype('en-US');
}
// Schema to create User model
const userSchema = new Schema(
  {
    username: { type: String, unique: "Enter a Unique Username", required: "Enter a Unique Username", trim: true },
    email: { type: String, unique: "Enter a Unique Email", required: "Enter a Unique Email", trim: true ,
    validate: 
    {validator: (email) => {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) 
    }, message: "Enter a Valid Email"}},
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