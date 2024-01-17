/** @format */

import React from "react";
import { getProviders, signIn } from "next-auth/react";

const SignIn = () => {
  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div>
      <button onClick={handleKakao}>kakao Login</button>
    </div>
  );
};

export default SignIn;
