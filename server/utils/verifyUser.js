import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
import { generateAccessToken } from "./tokenService.js";

// Middleware function to verify the authenticity of an access token
export const verifyToken = (req, res, next) => {
  // Log incoming request cookies for debugging
  console.log("req.cookies:", req.cookies);

  // Extract access token from the request cookies
  const token = req.cookies.access_token;
  console.log("token:", token);

  // Check if access token is present in the request
  if (!token) {
    console.log("Unauthorized: Token not found");
    // Return an unauthorized error using the errorHandler middleware
    return next(errorHandler(401, "Unauthorized"));
  }

  // Verify the access token using the provided JWT_SECRET
  jwt.verify(token, process.env.JWT, async (err, user) => {
    // Handle errors during token verification
    if (err) {
      console.log("Forbidden: Token verification failed");

      // Try to refresh the access token using the refresh token
      const refreshToken = req.cookies.refresh_token;

      // Check if a refresh token is present
      if (refreshToken) {
        try {
          // Decode the refresh token and generate a new access token
          const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET
          );
          const newAccessToken = generateAccessToken(decoded);

          // Set the new access token in the response cookies
          res.cookie("access_token", newAccessToken, { httpOnly: true });
          req.user = decoded;

          // Log success and proceed to the next middleware
          console.log("Token refresh successful");
          return next();
        } catch (refreshError) {
          console.log("Error refreshing token:", refreshError);
        }
      }

      // If refresh token is not present or refresh fails, return a forbidden error
      return next(errorHandler(403, "Forbidden"));
    }

    // If the token is verified successfully, set the user data in the request and proceed
    req.user = user;
    console.log("Token verification successful");
    next();
  });
};
