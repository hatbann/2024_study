/** @format */

import { assign, createMachine } from "xstate";

export type BookType = {
  id: number;
  book_title: string;
};

export type MovieType = {
  id: number;
  movie_title: string;
};

export type ListContext = {
  books: BookType[];
  movies: MovieType[];
};

export const listMachine = createMachine(
  {
    /** @xstate-layout N4IgpgJg5mDOIC5QBsCWsAuA6ARgezwGsBiAYQBkBJUgaQH0BZAeQDVKBROgFQEEAhANoAGALqJQABzyxUGVHgB24kAA9EAWgCMAFgDMWABwGArEICcmncYO7b2gDQgAnhv1mATAbPHTAdgOa7sYAvsGOaJhYALZ4AG6oYGRUtHR8TEz0vIKiylIycorKagjWBljGAGzagb4VQtUVjY4uCBXuWGa+5tq+7hWVQaFhIAp4EHDKERi50rLySkiqru6+WLp6vsbNGmZlFZsVOr7alSa7oeHo2PhEM-nzRYiBZdpCugZCZ7qb2whamlhNAdNLtdCDtF4zLoLiAprgCIQsKgFLI7nNCotikCKlhXu9PsYoT9nIhamt3HoAsZNPVNI1tDC4TdEcjyHgAIbjCBogoLUBYsl4j5fYktIKrAwU96aam0xrQ4ZMhFIhTsKISDAtSSzXmPBDY3FvYWE75bEkIXQecmUmU0hoVBWXSLMlUAMXZqGQkB5D0xT0FRoJRLNLWMfUMUqpdrpFUZV2icQSPox-I0KzMaw2IcQBkF1lsBcLCtCQA */
    id: "list",
    initial: "book",
    states: {
      book: {
        initial: "init",
        type: "parallel",
        states: {
          init: {
            invoke: {
              id: "load_books",
              src: "load_books",
              onDone: [{ target: "inLoaded", actions: "" }],
              onError: [],
            },
          },
          inLoaded: {},
          inEmpty: {},
          inFailed: {},
        },
        on: {
          CLICK_MOVIE_TAB: "movie",
        },
      },

      movie: {
        on: {
          CLICK_BOOK_TAB: "book",
        },
      },
    },
  },
  {
    services: {
      load_books: async () => {
        const res = await fetch(
          "https://6447c01c7bb84f5a3e47bbb0.mockapi.io/book"
        );
        const books = await res.json();
        return books;
      },
    },
    actions: {
      update_books: assign({
        books: (context, event) => {
          console.log(event);
          return [];
        },
      }),
    },
    guards: {
      isBookEmpty: (context, event) => {
        console.log(event);
        return true;
      },
    },
  }
);
