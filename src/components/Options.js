import React from "react";
import { Link } from "react-router-dom";
const Options = () => {
  return (
    <div className="flex justify-evenly">
      <Link to="10thsyllabus">
        <div className="m-3 p-3 shadow-md bg-white cursor-pointer font-bold rounded-md hover:scale-105 duration-500">
          10th std Notes Chapterwise
        </div>
      </Link>
      <Link to="/9thsyllabus">
        <div className="m-3 p-3 shadow-md bg-white cursor-pointer font-bold rounded-md hover:scale-105 duration-500">
          9th std Notes Chapterwise
        </div>
      </Link>
    </div>
  );
};

export default Options;
