import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import AsyncHandler from '../utils/AsyncHandler.js';
import { User } from '../models/user.model.js';

const LoginUser = AsyncHandler(async (req, res) => {
  const { username, password, cpassword, profilePic = "" } = req.body;
  if ([username, password, cpassword].filter((v) => v.trim() == "")) {
    throw new ApiError(400, "All fields are required!");
  }

  const user = User.create({ username, password, profilePic });

  if (!user) {
    throw new ApiError(500, "Failed to create user");
  }

  res.status(200).json(new ApiResponse(200, "User created successfully", user));
})

export {
  LoginUser
}