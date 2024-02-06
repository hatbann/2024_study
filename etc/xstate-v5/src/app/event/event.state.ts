/** @format */

import { createMachine } from "xstate";

export const EventMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgAd0AnMfAFwGVb1awBiMANxtpPwHtKGADYBtAAwBdRKDJ9YuWrj75pIAB6IA7ACYANCACeibQDYxAX3P60WPIVIVqdRszaduJWtmYAlMNzBKWHEpJBBZeUVlVQ0EHX0jBABmAE4ARhIAVksrEH4IOFUbHAJiVQiFJRUw2IBabQAWBMR6hstrDBL7cipuFxZyuUromuMmw0QTJKz2kGK7Yh6nBiYWElg+VDAAYTwhCH6wQciqmONNBpJ0hrETbUzmhG1G2fnSh17nVbASPi9A3a4faHY7DaqgWLaC5XNI3O4PCbJTKZGY5IA */
  initial: "one",
  states: {
    /*     parentState: {
      entry: () => console.log("parentState entered"),
      exit: () => console.log("parentState exited"),
      on: {
        "event.normal": {
          target: ".someChildState",
        },
        "event.thatReenters": {
          target: ".otherChildState",
          reenter: true,
        },
      },
      initial: "someChildState",
      states: {
        someChildState: {
          entry: () => console.log("someChildState entered"),
          exit: () => console.log("someChildState exited"),
        },
        otherChildState: {
          entry: () => console.log("otherChildState entered"),
          exit: () => console.log("otherChildState exited"),
        },
      },
    }, */
    one: {
      always: [
        {
          target: "two",
          actions: () => {
            console.log("it is state one");
          },
        },
      ],
    },
    two: {
      always: [
        {
          target: "three",
          actions: () => {
            console.log("it is state two");
          },
        },
      ],
    },
    three: {
      type: "final",
    },
  },
});
