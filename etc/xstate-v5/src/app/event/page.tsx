/** @format */
"use client";

import React, { useEffect } from "react";
import { createActor } from "xstate";
import { EventMachine } from "./event.state";

const Event = () => {
  useEffect(() => {
    const actor1 = createActor(EventMachine);
    actor1.start();
    // "parentState entered"
    // "someChildState entered"
    actor1.send({ type: "event.normal" });
    //"someChildState exited"
    // "someChildState entered"

    /*     const actor2 = createActor(EventMachine);
    actor2.start(); */
    // "parentState entered"
    // "someChildState entered"
    /*     console.log("---");
    actor2.send({ type: "event.thatReenters" }); */
    // "someChildState exited"
    // "parentState exited"
    // "parentState entered"
    // "otherChildState entered"
  }, []);

  return <div>Event</div>;
};

export default Event;
