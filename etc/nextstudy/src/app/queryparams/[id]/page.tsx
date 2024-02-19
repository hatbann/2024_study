/** @format */

"use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const detailPage = () => {
  const { id } = useParams();

  const searchParams = useSearchParams();

  return (
    <div>
      Page Num : {id}
      <br />
      food : {searchParams.get("food")}
    </div>
  );
};

export default detailPage;
