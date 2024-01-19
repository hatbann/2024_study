/** @format */

import { assign, createMachine } from 'xstate';

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
  /** @xstate-layout N4IgpgJg5mDOIC5QBsCWsAuA6ARgezwGsBiAYQBkBJUgaQH0BZAeQDVKBROgFQEEAhANoAGALqJQABzyxUGVHgB24kAA9EAWgCMAFgDMWABwGArEICcmncYO7b2gDQgAnhv1mATAbPHTAdgOa7sYAvsGOaJi4BIRYqAqyxBCKYLEKAG5EKRHY+ESpsghxGQDGAIZyisIiVcpSMhVKSKqIuppCWELa2prenr4AbF4Gji4Iuu7uWP6+rf262gb9ZkLu2qHh6DnR+RiJyakZhFmbUXlxBUV4ZQ1VAppiTXWy8o2gagja-ljG-UJC1sYzLpfMYRohPFhxnoAsY2t1+v09OsQNlTjE4uQ8KUIJBiAARdjkdhcTh8JhMGg1R7SZ6KZTvIRghBCZGo3LohSY7G49h4yhcOhkilUyQ0hr0xCM5yS1knAC2eDSqDAZCotEF5PovEEolqYpeEoQ-Xcvg6-wMXU0sOBZiZ430qz+iKMmjm41lkQVSpS512SQUPvSmSwqK9yp2hSD1xet111PqBqa7xN2iwHmtvjMS18bVt0rGxiw7it-QB2mNxgmun6oTCIAUeBx8Ca2T1CbpSdcJshehBTPU7nM33MVu0ZiBeh+NbrbOibdpr2aCHUC37gQM3w8C183QGJgMHq2Z3iGHn4s7CGLHV8f0Wmhzxs+7l0-c+WH6IICZgtPV0gP+h5oqkXI4hAZ6Jm8iD3v0WDaEIugGEIJhAn2+ZBKaBirAhVpwq6cyAeyqTsHKEgYKMortou7zQbB8GIchwKgvmugeJCWEwrhCK6AR2xxAAYqUqDIJA4EdpBCA0XBCFIYCjFMpWMGYdCOGdHhPF5DiwlyAoUCiVRkpMgimhscpsKqQigFhmAemGgOmY9nJ+bqJWRYWvMQSDIsO6aJZirhr6NkXgOrQOahoyWK6sHWLYMWxdxM7yn5gYgSJ8YLrZz7GfMjnhe4Zimt4NhxbFvnekRJFkYF4nBVlvZMeFeiTNo0XFTFpX+QoAlCalFHpUFmWhfVUFTmmLWtbWwRAA */
  id: 'list',
  schema: {
    context: {} as ListContext,
  },
  initial: 'book',
  states: {
    book: {
      initial: 'init',
      states: {
        init: {
          invoke: {
            src: {
              type: 'load_data',
              data_type: 'book',
            },
            onDone: [
              {
                target: 'inEmpty',
                cond: 'isBookEmpty',
                actions: 'update_books',
              },
              {
                target: 'inLoaded',
                actions: 'update_books',
              },
            ],
            onError: [],
          },
        },
        inLoaded: {
          on: {
            DELETE_BOOK: {
              target: 'deleting',
            },
            EDIT_BOOK: {
              target: 'editing',
            },
          },
        },
        inEmpty: {},
        inFailed: {},
        deleting: {
          invoke: {
            src: {
              type: 'delete_data',
              data_type: 'book',
            },
            onDone: [
              {
                target: 'init',
                cond: 'isDeleteSuccess',
              },
              {
                target: 'isShowModal',
              },
            ],
          },
        },
        editing: {},
        isShowModal: {
          on: {
            CLICK_CHECK_BTN: {
              target: 'init',
            },
          },
        },
      },
      on: {
        CLICK_MOVIE_TAB: 'movie',
      },
    },

    movie: {
      initial: 'init',
      states: {
        init: {
          invoke: {
            src: {
              type: 'load_data',
              data_type: 'movie',
            },
            onDone: {
              target: 'inLoaded',
              actions: 'update_movies',
            },
            onError: [],
          },
        },
        inLoaded: {
          on: {
            DELETE_MOVIE: {
              target: 'deleting',
            },
            EDIT_BOOK: {},
          },
        },
        inEmpty: {},
        inFailed: {},
        deleting: {
          invoke: {
            src: {
              type: 'delete_data',
              data_type: 'movie',
            },
            onDone: [
              {
                target: 'init',
                cond: 'isDeleteSuccess',
              },
              {
                target: 'isShowModal',
              },
            ],
          },
        },
        isShowModal: {
          on: {
            CLICK_CHECK_BTN: {
              target: 'init',
            },
          },
        },
      },
      on: {
        CLICK_BOOK_TAB: 'book',
      },
    },
  },
});
