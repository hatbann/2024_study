/** @format */
"use client";

import { useForm } from "react-hook-form";

interface LoginType {
  email: string;
  password: string;
}

const validation = {
  validEmail: /^([a-z0-9_\.-]{1,})@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  validPassword:
    /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_\-+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_\-+=]{8,20}$/,
};

export const useLoginForm = () => {
  const f = useForm<LoginType>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const r = {
    email: f.register("email", {
      required: true,
      pattern: {
        value: validation.validEmail,
        message: "유효하지 않은 이메일 입니다.",
      },
    }),
    password: f.register("password", {
      required: true,
    }),
  };

  return { f, r };
};
