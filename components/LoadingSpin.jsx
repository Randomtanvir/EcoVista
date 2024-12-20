import React from "react";

const LoadingSpin = () => {
  return (
    <div className="flex justify-center">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-pink-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpin;
