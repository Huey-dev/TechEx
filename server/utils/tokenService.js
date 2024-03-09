import jwt from "jsonwebtoken";

// Function to generate an access token for a user with a given expiration time
export const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.JWT, { expiresIn: "15m" });
};
