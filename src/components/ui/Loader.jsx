import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-full bg-neutral-950/75 absolute flex justify-center items-center">
      <img src="/loader.gif" alt="loader" width={"200px"} height={"200px"} className="sm:w-60 sm:h-60" />
    </div>
  );
};

export default Loader;
