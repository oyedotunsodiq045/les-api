const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true,
        match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email',
        ],
    },
    phone: {
      type: String,
      unique: true,
      maxlength: [20, 'Phone number can not be longer than 20 characters']
    },
    businessName: {
      type: String,
    //   required: [true, 'Please add a business name'],
      maxlength: [500, 'Business name can not be more than 500 characters']
    },
    website: {
        type: String,
        match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS'
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    role: {
        type: String,
        enum: ['user', 'sme'],
        default: 'user',
    },
    password: {
        type: String,
        // required: [true, 'Please add a password'],
        minlength: 6,
        select: false,
    },
    // amount: {
    //     type: Number,
    //     required: true,
    // },
    // reference: {
    //     type: String,
    //     required: true
    // },
    resetPasswordToken: String,
    resetPasswordExpire: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Encrypt password using bcrypt
UserSchema.pre('save', async function(next) {
  // if (this.password == 'undefined' || this.password.length > 5) {
  if (this.password == 'undefined') {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// Sign JWT and return
UserSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enterdPassword) {
  return await bcrypt.compare(enterdPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
