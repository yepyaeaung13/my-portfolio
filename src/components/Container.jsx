import React from "react";

const Container = ({ children }) => {
  return <div className="md:w-[85vw] sm:w-[95vw] mx-auto">{children}</div>;
};

export default Container;
