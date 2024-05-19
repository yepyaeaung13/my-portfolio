import React from "react";

const Container = ({ children }) => {
  return (
    <div className="md:w-[85vw] w-[95vw] px-[1vw] mx-auto">{children}</div>
  );
};

export default Container;
