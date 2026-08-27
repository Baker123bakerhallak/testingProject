import React from "react";

export const metadata = {
  title: "articels page",
};
const layout = ({ children }) => {
  return (
    <div>
      <h1>Articels</h1>
      <div className="flex justify-center items-center bg-blue-500 ">
        {children}
      </div>
    </div>
  );
};

export default layout;
