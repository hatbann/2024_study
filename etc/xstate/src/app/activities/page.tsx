/** @format */
"use client";

import { useMachine } from "@xstate/react";
import React from "react";
import { alarmClockMachine } from "./activities.state";

const componentName = () => {
  const [state, send] = useMachine(alarmClockMachine);

  return (
    <div>
      Activities
      <button
        onClick={() => {
          send("ALARM");
        }}>
        Start Alarm
      </button>
      <button
        onClick={() => {
          send("STOP");
        }}>
        Stop Alarm
      </button>
    </div>
  );
};

export default componentName;
