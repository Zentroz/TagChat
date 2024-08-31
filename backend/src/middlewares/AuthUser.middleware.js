import jwt from 'jsonwebtoken';
import { User } from '../models/user.model.js';
import ApiError from '../utils/ApiError.js';

const AuthUser = async (req, res, next) => {
  const token = req.cookies?.accesstoken;

  if (!token) {
    throw new ApiError(400, "Unauthorized User");
  }

  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decodedToken._id).select("-password -refreshToken")

    if (!user) {
      throw new ApiError(500, "Couldn't find user in database")
    }

    req.user = user

    next()

  } catch (error) {
    throw new ApiError(400, "Invalid Token", error);
  }
}

export default AuthUser