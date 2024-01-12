/** @format */
"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useGetData, usePostData } from "./api/useQuery";

type BookType = {
  bookname: string;
  author: string;
  id: string;
};

type MovieType = {
  name: string;
  id: string;
};

const getBooks = () => {
  return fetch("https://6447c01c7bb84f5a3e47bbb0.mockapi.io/books", {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
};

const getMovies = () => {
  return fetch("https://6447c01c7bb84f5a3e47bbb0.mockapi.io/movies", {
    method: "GET",
    headers: { "content-type": "application/json" },
  }).then((res) => res.json());
};

export default function Home() {
  const { data: bookdata, isLoading: isBookLoading } = useGetData<BookType[]>(
    ["book"],
    getBooks
  );

  const { isLoading: isMovieLoading, data: moviedata } = useGetData<
    MovieType[]
  >(["movie"], getMovies);

  const movieMutation = usePostData<MovieType>(
    ["movie"],
    "https://6447c01c7bb84f5a3e47bbb0.mockapi.io/movies"
  );

  return (
    <main className={styles.main}>
      {/*       {getBook1()}
      {getBook2()} */}
      {isBookLoading && <p>book is Loading...</p>}
      {bookdata
        ? bookdata.map((book, idx) => {
            return <p>{book.bookname}</p>;
          })
        : ""}
      {isMovieLoading && <p>movie is Loading...</p>}
      {moviedata
        ? moviedata.map((movie, idx) => {
            return <p>{movie.name}</p>;
          })
        : ""}
      <button
        onClick={() => {
          movieMutation.mutate({
            name: "example Movie",
            id: String(Math.random() * 100) + 10,
          });
        }}>
        add movie
      </button>
    </main>
  );
}
