/** @format */
"use client";

import { useMachine } from "@xstate/react";
import React, { useEffect } from "react";
import { EventMachine, raiseActionDemo } from "./event.state";

const EventPage = () => {
  const [state, send] = useMachine(EventMachine, {
    actions: {
      actionOne: (context, event) => {
        console.log("action 1");
      },
      actionTwo: (context, event) => {
        console.log("action 2");
      },
      actionThree: (context, event) => {
        console.log("action 3");
      },
    },
  });

  const state1 = EventMachine.initialState;
  const state2 = EventMachine.transition("one", { type: "CONSOLE" });
  const state3 = EventMachine.transition("two", { type: "CONSOLE" });

  //console.log(state1.actions);
  //[ { type: 'actionOne', exec: [Function: exec] } ]

  const [raiseState, raiseSend] = useMachine(raiseActionDemo);

  useEffect(() => {
    console.log(raiseState.value);
  }, [raiseState]);

  return (
    <div>
      Event
      <button
        onClick={() => {
          raiseSend("RAISE");
        }}>
        Trigger Raise
      </button>
    </div>
  );
};

export default EventPage;
