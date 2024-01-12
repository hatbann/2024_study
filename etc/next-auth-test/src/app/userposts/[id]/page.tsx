/** @format */

import React from "react";

const componentName = ({ params }: { params: { id: string } }) => {
  return <div>{params.id}</div>;
};

export default componentName;
