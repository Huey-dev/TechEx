import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const LandingPage = () => {
  const [isBuyNowHovered, setIsBuyNowHovered] = useState(false);
  const [isRepairNowHovered, setIsRepairNowHovered] = useState(false);

  return (
    <div className="relative">

      {/* Main content */}
      <main className="flex items-center justify-center h-screen">
        <div className="flex flex-1">
          {/* Image for "Buy now" */}
          <motion.div
            className="flex relative"
            whileHover={{ scale: 1.85 }}
            transition={{ delay: 0.025 }}
            onMouseEnter={() => setIsBuyNowHovered(true)}
            onMouseLeave={() => setIsBuyNowHovered(false)}
          >
            <img
              src="apple-iphone-15-pro-max-256gb-natural-titanium.png"
              alt="Buy now"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              style={{ filter: isBuyNowHovered ? "blur(4px)" : "none" }}
            />
            <Link to="/dashboard">
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isBuyNowHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-white text-2xl font-semibold relative"
                  whileHover={{ scaleX: 1.1 }} // Scale effect on hover
                >
                  <Link to="/">Buy now</Link>
                  {isBuyNowHovered && (
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 200 80" // Adjust viewBox to fit the text
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 left-0"
                    >
                      <motion.rect
                        width="200"
                        height="80"
                        rx="40" // Rounded corners
                        fill="none"
                        stroke="white"
                        strokeWidth="4" // Increased stroke width
                        strokeLinecap="round"
                        initial={{ pathLength: 0, pathOffset: 1 }}
                        animate={{ pathLength: 1, pathOffset: 0 }}
                        transition={{ duration: 0.5 }} // Slower animation
                      />
                    </svg>
                  )}
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Image for "Repair Now" */}
          <motion.div
            className="flex-1 relative"
            whileHover={{ scale: 1.25 }}
            transition={{ delay: 0.025 }}
            onMouseEnter={() => setIsRepairNowHovered(true)}
            onMouseLeave={() => setIsRepairNowHovered(false)}
          >
            <img
              src="clint-bustrillos-K7OUs6y_cm8-unsplash.jpg"
              alt="Repair now"
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              style={{ filter: isRepairNowHovered ? "blur(4px)" : "none" }}
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center opacity-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isRepairNowHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/">
                <motion.div
                  className="text-white ml-8 text-2xl font-semibold relative"
                  whileHover={{ scaleX: 1.1 }} // Scale effect on hover
                >
                  Repair now
                  {isRepairNowHovered && (
                    <svg
                      width="300%"
                      height="300%"
                      viewBox="80 -30 200 90" // Adjust viewBox to fit the text
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute bottom-0 left-0 "
                    >
                      <motion.rect
                        width="200"
                        height="70"
                        rx="40" // Rounded corners
                        fill="none"
                        stroke="white"
                        strokeWidth="4" // Increased stroke width
                        strokeLinecap="round"
                        initial={{ pathLength: 0, pathOffset: 1 }}
                        animate={{ pathLength: 1, pathOffset: 0 }}
                        transition={{ duration: 1 }} // Slower animation
                      />
                    </svg>
                  )}
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
