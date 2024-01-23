/** @format */

import { createMachine } from "xstate";

export type practiceContext = {};

export const practiceMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAcBOBDAxgFwJabADpZt1swBGAYggHsA7IksotLPA408igbQAYAuohS1YuPAxEgAHogBMATgCshZQBYAbP0UAOZbv4HNygDQgAnogoV1hAOwBmTY-X95FZTs337AXz9zNhx8Jm5KQlx6CRoGIiiAN1oAa1YMEM5mHkjo7ARE2kwyXAYBQTLpZDEJEvppOQQAWkdDQnl5A111XU0evU1zKybNNsd+fhM3MecJ5QCg9I4wlnkcmLpGHKTUwmClrhW1vIKiyXoyiqQQKvEz6SHG9Tt+T0cKXXsX+VdHeXMGzqERSaNzjLzfFTqAKBED0WgQOCVRahSrVO5XBqNXyONqaTxKRyKIndAaWRCNDyKQgvZTTZTyHQMxzza7IzLhCio261erk+wdXH4xSE4k9QbkihvNRCkEmfi-dTMmF7UIHbJRCRcmpSDHknz2QX04VExQk8VNJ7U-G6eS9XQURTfTwslXslgUHIAG1o6AREC16NAmP1hoJJrNZIQkoN3XUn2FPXsniMLrZy3I8gDPN1Ft05sako9yleNlL-Gx8lT7FVWTAqw12CzOqDiDeBs+eN0hnchI0+ctNLeHy+P0ryrTarrXp9fqbdRz-HN0cIsd6FCUHxMvWhfiAA */
  id: "practice",

  schema: {
    context: {} as practiceContext,
  },
  predictableActionArguments: true,
  states: {
    state1: {
      initial: "init",
      states: {
        init: {
          invoke: {
            src: "timer1",
            onDone: {
              target: "inloaded",
              actions: "console_state1",
            },
          },
        },
        inloaded: {
          type: "final",
        },
      },
      onDone: "state2",
    },
    state2: {
      initial: "init",
      states: {
        init: {
          invoke: {
            src: "timer2",
            onDone: {
              target: "inloaded",
              actions: "console_state2",
            },
          },
        },
        inloaded: {
          type: "final",
        },
      },
    },
  },

  initial: "state1",
});
