/** @format */
import { createMachine } from "xstate";

export const PowerMachine = createMachine({
  id: "powerMachine",
  initial: "powerOff",
  type: "compound",
  predictableActionArguments: true,
  states: {
    powerOff: {
      on: {
        TURN_ON: {
          target: "powerOn.hist",
        },
      },
    },
    powerOn: {
      type: "parallel",
      states: {
        temperature: {
          type: "compound",
          initial: "low",
          states: {
            low: {
              on: {
                TOGGLE_TEMP: {
                  target: "high",
                },
              },
            },
            high: {
              on: {
                TOGGLE_TEMP: {
                  target: "low",
                },
              },
            },
          },
        },
        color: {
          type: "compound",
          initial: "yellow",
          states: {
            yellow: {
              on: {
                TOGGLE_COLOR: {
                  target: "white",
                },
              },
            },
            white: {
              on: {
                TOGGLE_COLOR: {
                  target: "yellow",
                },
              },
            },
          },
        },
        hist: {
          type: "history",
          history: "deep",
        },
      },
      on: {
        TURN_OFF: {
          target: "powerOff",
        },
      },
    },
  },
});
