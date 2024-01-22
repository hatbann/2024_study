/** @format */

import { createMachine } from "xstate";

export type inputListContext = {};

export const inputMachine = createMachine({
  id: "inputlist",
  schema: {
    context: {} as inputListContext,
  },
  states: {
    init: {
      on: {
        CLICK_LOGIN_BTN: {
          target: "requesting",
        },
      },
    },
    requesting: {},
    RequestSuccess: {
      type: "final",
    },
  },
});
