const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, phone, businessName, website, address, role, password } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    phone,
    businessName,
    website,
    address,
    role,
    password,
  });

  // Create token
  // const token = user.getSignedJwtToken();

  // res.status(200).json({ success: true, token });

  sendTokenResponse(user, 200, res);
});

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Private
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & login
  if (!email || !password) {
    return next(new ErrorResponse(`Please provide an email and password`, 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }

  // Check if password match
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse(`Invalid credentials`, 401));
  }

  // Create token
  // const token = user.getSignedJwtToken();

  // res.status(200).json({ success: true, token });

  sendTokenResponse(user, 200, res);
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV == 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
    });
};
