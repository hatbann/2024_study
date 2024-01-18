/** @format */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useMachine } from "@xstate/react";
import { listMachine } from "./main.state";
import { assign } from "xstate";

export default function Home() {
  const [state, send, service] = useMachine(listMachine, {
    services: {
      load_data: async (context, event, { src }) => {
        const res = await fetch(
          `https://6447c01c7bb84f5a3e47bbb0.mockapi.io/${src.data_type}`
        );
        const data = await res.json();
        return data;
      },
    },
    actions: {
      update_books: assign({
        books: (context, event) => {
          return event.data;
        },
      }),
      update_movies: assign({
        movies: (context, event) => {
          return event.data;
        },
      }),
    },
    guards: {
      isBookEmpty: (context, event) => {
        return event.data.length === 0;
      },
      isMovieEmpty: (context, event) => {
        return event.data.length === 0;
      },
    },
  });

  return (
    <main className={styles.main}>
      <div className={styles.tabContainer}>
        <button onClick={() => send("CLICK_BOOK_TAB")}>책</button>
        <button onClick={() => send("CLICK_MOVIE_TAB")}>영화</button>
      </div>
      {state.matches("book") && (
        <div>
          <h2>책</h2>
          {state.matches("book.init") && <h3>책 불러오는중...</h3>}
          {state.matches("book.inEmpty") && <h3>책이 없습니다</h3>}
          {state.matches("book.inLoaded") &&
            state.context.books.map((book, idx) => {
              return <p>{book.book_title}</p>;
            })}
        </div>
      )}
      {state.matches("movie") && (
        <div>
          <h2>영화</h2>
          {state.matches("movie.init") && <h3>영화 불러오는중...</h3>}
          {state.matches("movie.inEmpty") && <h3>영화가 없습니다</h3>}
          {state.matches("movie.inLoaded") &&
            state.context.movies.map((movie, idx) => {
              return <p>{movie.movie_title}</p>;
            })}
        </div>
      )}
    </main>
  );
}
