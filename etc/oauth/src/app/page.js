/** @format */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  console.log(session);
  return (
    <main className={styles.main}>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>
        Google
      </button>
      <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>
        Kakao
      </button>
      <button onClick={() => signIn("kakao", { callbackUrl: "/" })}>
        Apple
      </button>
    </main>
  );
}
