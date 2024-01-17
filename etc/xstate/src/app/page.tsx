/** @format */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useMachine } from "@xstate/react";
import { listMachine } from "./main.state";

export default function Home() {
  const service = useMachine(listMachine);

  return (
    <main className={styles.main}>
      <div className={styles.tabContainer}>
        <button>책</button>
        <button>영화</button>
      </div>
    </main>
  );
}
