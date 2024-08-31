import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import AsyncHandler from '../utils/AsyncHandler.js';
import { User } from '../models/user.model.js';
import options from '../utils/options.js';

const RegisterUser = AsyncHandler(async (req, res) => {
  const { username, password, cpassword } = req.body;
  if ([username, password, cpassword].some((field) => {
    field.trim() == ""
  })) {
    throw new ApiError(400, "All fields are required!")
  }

  if (password != cpassword) {
    throw new ApiError(400, "Confirmed Password does not match password");
  }

  const user = await User.create({ username, password });

  const createdUser = await User.find(user).select("-password -refreshToken")

  if (!user) {
    throw new ApiError(500, "Failed to create user");
  }

  res.status(200).json(new ApiResponse(200, "User created successfully", createdUser));
})

const LoginUser = AsyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if ([username, password].some((field) => {
    field.trim() == ""
  })) {
    throw new ApiError(400, "All fields are required!")
  }

  const user = await User.findOne({ username });

  if (!user) {
    throw new ApiError(400, "Couldn't find user in database");
  }

  const isPasswordCorrect = await user.isPasswordCorrect(password);

  if (!isPasswordCorrect) {
    throw new ApiError(400, "Wrong Password");
  }

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();


  if (!accessToken || !refreshToken) {
    throw new ApiError(500, "Failed to generate token")
  }

  user.refreshToken = refreshToken.toString();
  await user.save();

  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  res.status(200).cookie("accesstoken", accessToken, options).cookie("refreshtoken", refreshToken, options).json(new ApiResponse(200, loggedInUser, "Logged in successfully"))
})

const LogoutUser = AsyncHandler(async (req, res) => {

  const loggedOutUser = await User.findByIdAndUpdate(req.user._id, { refreshToken: "" }).select("-password -refreshToken")

  if (!loggedOutUser) {
    throw new ApiError(500, "Failed to log out user")
  }

  res.status(200).cookie("accesstoken", "", options).cookie("refreshtoken", "", options).json(new ApiResponse(200, "User logged out successfully", {}))
})

const deleteUser = AsyncHandler(async (req, res) => {
  const user = req.user;

  const deletedUser = await User.deleteOne(user).select("-password -refreshToken")

  res.status(200).cookie("accesstoken", "", options).cookie("refreshtoken", "", options).json(new ApiResponse(200, "User deleted successfully", deletedUser))
})

const UploadProfileImage = AsyncHandler(async (req, res) => {
  const path = req.file.path;

  console.log(path);
  console.log(req.user);
  const user = await User.findByIdAndUpdate(req.user._id, { profilePic: path }, { new: true }).select("-password -refreshToken");

  if (!user) {
    throw new ApiError(400, "Couldn't find user in database");
  }

  res.status(200).json(new ApiResponse(200, "Profile image uploaded successfully", user));
})

const RenewAccessToken = AsyncHandler(async (req, res) => {
  const token = req.cookies?.refreshtoken;

  if (!token) {
    throw new ApiError(400, "Refresh Token not found");
  }

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(500, "Couldn't find user in database");
  }

  const accessToken = await user.generateAccessToken();
  const refreshToken = await user.generateRefreshToken();

  const renewedUser = await User.findByIdAndUpdate(req.user._id, { refreshToken }).select("-password -refreshToken");

  res.status(200).cookie("accesstoken", accessToken, options).cookie("refreshtoken", refreshToken, options).json(new ApiResponse(200, "Access token renewed successfully", renewedUser))
})

export {
  RegisterUser,
  LoginUser,
  LogoutUser,
  UploadProfileImage,
  deleteUser,
  RenewAccessToken
}