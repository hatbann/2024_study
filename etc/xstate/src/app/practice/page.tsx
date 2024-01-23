/** @format */
"use client";

import { useMachine } from "@xstate/react";
import React from "react";
import { practiceMachine } from "./practice.state";

const page = () => {
  const [state, send] = useMachine(practiceMachine, {
    actions: {
      console_state1: (context, event) => {
        console.log("state1");
      },
      console_state2: (context, event) => {
        console.log("state2");
      },
    },
    services: {
      timer1: () => async () => {
        const wait = (timeToDelay: number) =>
          new Promise((resolve) => setTimeout(resolve, timeToDelay)); //이와 같이 선언 후

        await wait(1000);
        return "";
      },
      timer2: () => async () => {
        console.log("timer");
      },
    },
  });

  return <div></div>;
};

export default page;
