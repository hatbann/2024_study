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

export const listMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBsCWsAuA6ARgezwGsBiAYQBkBJUgaQH0BZAeQDVKBROgFQEEAhANoAGALqJQABzyxUGVHgB24kAA9EAWgCMAFgDMWABwGArEICcmncYO7b2gDQgAnhv1mATAbPHTAdgOa7sYAvsGOaJi4BIRYqAqyxBCKYLEKAG5EKRHY+ESpsghxGQDGAIZyisIiVcpSMhVKSKqIuppCWELa2prenr4AbF4Gji4Iuu7uWP6+rf262gb9ZkLu2qHh6DnR+RiJyakZhFmbUXlxBUV4ZQ1VAppiTXWy8o2gagja-ljG-UJC1sYzLpfMYRohPFhxnoAsY2t1+v09OsQNksABbPBpVBgMhUWh0PhMJj0XiCUS1aTPRTKd79dy+Dr-AxdTSw4FmMFjdz6VZ-RFGTRzcahMIgBR4CBwZTZCn1F401z0yF6EGc9QTSb9EE2XwrIJmIbI1G5QiyqmvZoIdX9LAeMwWXQGTzA4z03xqzS6YxYTTa+a6ZZAoLuI0nE07M0NBUIdyaDq6oSLX2C1a+blqz5YLXWHrMnpe5YhUXG7Zxch4UqSiCR+VNd6+m3aISOxOAl2coIMp3Q1lwwVzUORcNxdhoiQYUaSSlRuuIBtYJstkxA1XOFoeSGrR29zr93SDrZnBQAMVKqGQkBr1NnCHni4MrZXoLXCFdNu729hu4RB-RmOxV4Wu86q+GYyrti+BgDAu1i2HB8H7iKQA */
  id: "list",
  schema: {
    context: {} as ListContext,
  },
  initial: "book",
  states: {
    book: {
      initial: "init",
      states: {
        init: {
          invoke: {
            src: {
              type: "load_data",
              data_type: "book",
            },
            onDone: [
              {
                target: "inEmpty",
                cond: "isBookEmpty",
                actions: "update_books",
              },
              {
                target: "inLoaded",
                actions: "update_books",
              },
            ],
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
      initial: "init",
      states: {
        init: {
          invoke: {
            src: {
              type: "load_data",
              data_type: "movie",
            },
            onDone: [
              {
                target: "inEmpty",
                cond: "isMovieEmpty",
                actions: "update_movies",
              },
              {
                target: "inLoaded",
                actions: "update_movies",
              },
            ],
            onError: [],
          },
        },
        inLoaded: {},
        inEmpty: {},
        inFailed: {},
      },
      on: {
        CLICK_BOOK_TAB: "book",
      },
    },
  },
});
