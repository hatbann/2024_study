/** @format */
"use client";

import React from "react";
import style from "./power.module.scss";
import { useMachine } from "@xstate/react";
import { PowerMachine } from "./power.state";

const componentName = () => {
  const [state, send] = useMachine(PowerMachine);
  const color =
    state.matches("powerOn.temperature.low") &&
    state.matches("powerOn.color.yellow")
      ? "#e8d758"
      : state.matches("powerOn.temperature.low") &&
        state.matches("powerOn.color.white")
      ? "#ededed"
      : state.matches("powerOn.temperature.high") &&
        state.matches("powerOn.color.yellow")
      ? "#fff966"
      : state.matches("powerOn.temperature.high") &&
        state.matches("powerOn.color.white")
      ? "#ffffff"
      : "#6d6d6d";

  console.log(state.matches("powerOn.color.yellow"));

  return (
    <div>
      <div>
        <button
          disabled={state.matches("powerOn")}
          className={
            state.matches("powerOff")
              ? `${style.activate} ${style.powerBtn}`
              : style.powerBtn
          }
          onClick={() => {
            send("TURN_ON");
          }}>
          Turn On
        </button>
        <button
          disabled={state.matches("powerOff")}
          className={
            state.matches("powerOn")
              ? `${style.activate} ${style.powerBtn}`
              : style.powerBtn
          }
          onClick={() => {
            send("TURN_OFF");
          }}>
          Turn Off
        </button>
      </div>
      <div className={style.bulbContainer}>
        <svg width="200" height="200" viewBox="-100 -100 200 200">
          <circle cx="0" cy="0" r="50" fill={color}></circle>
          <rect x="-25" y="42" width="50" height="20" fill="#000000"></rect>
        </svg>
      </div>
      <div className={style.changeContainer}>
        <p>색상 변경</p>
        <div className={style.buttonContainer}>
          <button
            disabled={
              state.matches("powerOff") || state.matches("powerOn.color.yellow")
            }
            className={
              state.matches("powerOn.color.white")
                ? `${style.activate} ${style.changeBtn}`
                : `${style.changeBtn}`
            }
            onClick={() => send("TOGGLE_COLOR")}>
            노란색
          </button>
          <button
            disabled={
              state.matches("powerOff") || state.matches("powerOn.color.white")
            }
            className={
              state.matches("powerOn.color.yellow")
                ? `${style.activate} ${style.changeBtn}`
                : `${style.changeBtn}`
            }
            onClick={() => send("TOGGLE_COLOR")}>
            흰색
          </button>
        </div>
      </div>
      <div className={style.changeContainer}>
        <p>온도 변경</p>
        <div className={style.buttonContainer}>
          <button
            disabled={
              state.matches("powerOff") ||
              state.matches("powerOn.temperature.low")
            }
            className={
              state.matches("powerOn.temperature.high")
                ? `${style.activate} ${style.changeBtn}`
                : `${style.changeBtn}`
            }
            onClick={() => send("TOGGLE_TEMP")}>
            낮게
          </button>
          <button
            disabled={
              state.matches("powerOff") || state.matches("powerOn.color.high")
            }
            className={
              state.matches("powerOn.temperature.low")
                ? `${style.activate} ${style.changeBtn}`
                : `${style.changeBtn}`
            }
            onClick={() => send("TOGGLE_TEMP")}>
            높게
          </button>
        </div>
      </div>
    </div>
  );
};

export default componentName;
