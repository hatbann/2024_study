/** @format */
"use client";

import { useForm } from "react-hook-form";

interface LoginType {
  email: string;
  password: string;
  name: string;
  age: number;
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
      name: "",
      age: 0,
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
      onChange: () => {
        const value = f.getValues("password");
        if (f.getValues("password").length > 20) {
          f.setValue("password", value.slice(0, 20));
        }
      },
    }),
    name: f.register("name", {
      required: true,
    }),
    age: f.register("age", {
      required: true,
    }),
  };

  return { f, r };
};
