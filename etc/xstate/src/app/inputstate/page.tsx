/** @format */
"use client";

import React from "react";
import { useLoginForm } from "./form";
import { useMachine } from "@xstate/react";
import { inputMachine } from "./inputstate.state";
import style from "./inputstate.module.scss";

const page = () => {
  const {
    f: {
      handleSubmit,
      resetField,
      formState: { errors, isValid },
    },
    r,
  } = useLoginForm();
  const [state, send] = useMachine(inputMachine, {
    actions: {},
  });

  console.log(isValid);

  const handleLoginBtn = () => {
    if (isValid) {
      send("CLICK_LOGIN_BTN");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="id">아이디</label>
        <input type="text" id="id" {...r.email} />
      </div>
      <div>
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" {...r.password} />
      </div>
      <button
        onClick={handleLoginBtn}
        className={
          isValid
            ? `${style["login_btn"]} ${style["isvalid"]}`
            : style["login_btn"]
        }>
        로그인
      </button>
    </div>
  );
};

export default page;
