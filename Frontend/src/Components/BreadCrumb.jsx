import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;
  return (
    <div className="breadcrumb">
      <p>{title}</p>
    </div>
  );
};

export default BreadCrumb;
