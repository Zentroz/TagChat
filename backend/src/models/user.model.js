import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    min: [5, "Minimum 5 characters are required"],
    max: [14, "Maximum 14 characters are allowed"]
  },
  password: {
    type: String,
    required: true,
    min: [8, "Minimum 8 characters are required"],
    max: [16, "Maximum 16 characters are allowed"]
  },
  profilePic: {
    type: String
  },
  refreshToken: {
    type: String
  }
},
  {
    timestamps: true
  });

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 8);
  next();
})

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = async function (password) {
  return await jwt.sign({ _id: this._id, createdAt: Date.now() }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

userSchema.methods.generateRefreshToken = async function (password) {
  return await jwt.sign({ _id: this._id, createdAt: Date.now() }, process.env.JWT_SECRET, { expiresIn: "28d" });
}
export const User = mongoose.model("user", userSchema);