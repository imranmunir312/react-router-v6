import React from "react";
import { useParams } from "react-router-dom";

const Variant = () => {
  const { varaintId } = useParams();
  return <div>varaint id {varaintId} </div>;
};

export default Variant;
