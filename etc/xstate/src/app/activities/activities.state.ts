/** @format */

import { createMachine } from "xstate";

export const alarmClockMachine = createMachine(
  {
    id: "alarmClock",
    initial: "idle",
    predictableActionArguments: true,
    states: {
      idle: {
        on: {
          ALARM: "alarming",
        },
      },
      alarming: {
        activities: ["beeping"], // actions 가 아니라 activities 로 바뀐데 주목
        on: { STOP: "idle" },
      },
    },
  },
  {
    activities: {
      beeping: () => {
        const beep = () => console.log("beep");
        const intervalId = setInterval(beep, 1000);
        return () => clearInterval(intervalId); // 클리어해주지 않으면 매모리 누수가 발생한다.
      },
    },
  }
);
