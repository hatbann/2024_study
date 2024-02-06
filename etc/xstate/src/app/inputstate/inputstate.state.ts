/** @format */

import { createMachine } from "xstate";

export type inputListContext = {};

export const inputMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QEsB2AHArgFwDbNmwDo1lsBiAYQBkBJSgaQH1qB5AcVoDkmAhAFS4BtAAwBdRKHQB7WGWTTUkkAA9EAJgCsAZiLaAnCIBs6kZp0BGbRYAsAGhABPRLfVERHz0ZHWbNiwC+QQ6o0hBwymhYeATYyjJy2ApKSKqIALRGDs4I6ZpE+oVFxcXawSBROPiEJKhk8bLyispqCBZG+kQAHIZGFu2a6jYe2gDs2S42bjZFXd76moXmmuWVMTUATmAAjphwSahQDYnJLYg2OkS2XX6jIvozo0MTbVNEmp4e3r7+qxhVsSIACUdntCABlTAAYyhcHgqQSTRSoFaUxeXQsRBmsy6mimNlxZSCASAA */
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
