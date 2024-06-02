import React from "react";

const GradientBtn = ({ title, className }) => {
  return (
    <button
      className={`bg-gradient-to-r text-white from-orange-300 to-blue-300 py-2 px-6  rounded-lg duration-300 hover:scale-110 ${className}`}
    >
      {title}
    </button>
  );
};

export default GradientBtn;