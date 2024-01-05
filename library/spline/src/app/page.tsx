/** @format */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Spline, { SplineEvent } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { useRef } from "react";

export default function Home() {
  const spline = useRef<Application>();

  function onLoad(splineApp: Application) {
    // save the app in a ref for later use
    spline.current = splineApp;
  }

  const stop = () => {
    spline.current?.emitEvent("mouseHover", "Cube");
  };

  return (
    <main className={styles.main}>
      {" "}
      <Spline
        scene="https://prod.spline.design/PzfgTQWs3xfmiHZe/scene.splinecode"
        onLoad={onLoad}
      />
      <button onClick={stop}>stop</button>
    </main>
  );
}
