/** @format */

import { createMachine, raise } from "xstate";

export const EventMachine = createMachine(
  {
    initial: "one",
    predictableActionArguments: true,
    states: {
      one: {
        on: {
          /*           "": {
            actions: () => {
              //console.log("one to two");
            },
            target: "two",
          }, */
          CONSOLE: {
            actions: "actionOne",
            target: "two",
          },
        },
      },
      two: {
        on: {
          /*           "": {
            actions: () => {
              //console.log("it is state two");
            },
            target: "three",
          }, */
          CONSOLE: {
            actions: "actionTwo",
            target: "three",
          },
        },
      },
      three: {
        type: "final",
        on: {
          CONSOLE: {
            actions: "actionThree",
          },
        },
      },
    },
  }
  /*   {
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
  } */
);

export const raiseActionDemo = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QCcCGBLWkC2B7AdGAHYAuyAngMQDKAKgKIAKA2gAwC6ioADrrOiXS4iXEAA9EARgAsATnwBWABwLZAZgDsCgDQhyiAEyyl+DazWS1BgGxG1s6QrUBfZ7rSYcBYmSoAlAEEASWp6Nk4kEF5+QWFRCQRJBQ1TJWsnaQ0tNVYNa2ldfUSFaXxrDSU1a2NWYwMlJWlXdwwsCDx8bHQICAAbMEoAOXoADVpw0WiBIRFIhKrSgw01aU0dPUMrfEz062sLaWqNJeaQDzaO3tRYEko-elDxjkm+abi5xAX8JZW1wsQlJJFK43CAiLgIHBROcvC8YjN4ogALTWf4IJEKfCybHYqySDSyAySSRKU4w9reUgUOFvWagBLSAxo2SsfBrMmtLydbp9MA02J08SGaxAklaNEGLayPIKPYHI4nUHky7XEj8hEfBCZUpKYyrcUbBAs-CsSpqc0Wy0uEFAA */
  id: "raisedmo",
  initial: "entry",
  predictableActionArguments: true,
  states: {
    entry: {
      on: {
        STEP: {
          target: "middle",
        },
        RAISE: {
          target: "middle",
          // immediately invoke the NEXT event for 'middle'
          actions: raise({ type: "CONSOLE" }),
        },
      },
    },
    middle: {
      on: {
        NEXT: { target: "last" },
        CONSOLE: {
          actions: () => {
            console.log("raise action");
          },
        },
      },
    },
    last: {
      entry: () => {
        console.log("this is last");
      },
      on: {
        RESET: { target: "entry" },
      },
    },
  },
});
