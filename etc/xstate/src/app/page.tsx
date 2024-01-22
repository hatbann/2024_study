/** @format */
'use client';

import Image from 'next/image';
import styles from './page.module.scss';
import { useMachine } from '@xstate/react';
import { listMachine } from './main.state';
import { assign } from 'xstate';
import { useState } from 'react';

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
      delete_data: async (context, event, { src }) => {
        const res = await fetch(
          `https://6447c01c7bb84f5a3e47bbb0.mockapi.io/${src.data_type}/${event.id}`,
          {
            method: 'Delete',
          }
        );
        return res.status === 200;
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
      isDeleteSuccess: (context, event) => {
        return event.data;
      },
    },
  });

  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [editingId, setEditingId] = useState(-1);
  const [editingContent, setEditingContent] = useState('');

  return (
    <main className={styles.main}>
      <div className={styles.tabContainer}>
        <button
          onClick={() => send('CLICK_BOOK_TAB')}
          className={state.matches('book') ? styles.selected : ''}
        >
          책
        </button>
        <button
          onClick={() => send('CLICK_MOVIE_TAB')}
          className={state.matches('movie') ? styles.selected : ''}
        >
          영화
        </button>
      </div>
      <div className={styles.contentContainer}>
        {state.matches('book') && (
          <>
            <h2>책</h2>
            {state.matches('book.init') && <h3>책 불러오는중...</h3>}
            {state.matches('book.inEmpty') && <h3>책이 없습니다</h3>}
            {state.matches('book.inLoaded') &&
              state.context.books.map((book, idx) => {
                return (
                  <div className={styles.content}>
                    {book.id === editingId && isOpenEdit ? (
                      <input
                        value={editingContent}
                        onChange={(e) => {
                          setEditingContent(e.target.value);
                        }}
                      ></input>
                    ) : (
                      book.book_title
                    )}

                    <button
                      onClick={() => send('DELETE_BOOK', { id: book.id })}
                    >
                      삭제
                    </button>
                    <button
                      onClick={() => {
                        setIsOpenEdit(true);
                        setEditingId(book.id);
                        setEditingContent(book.book_title);
                      }}
                    >
                      수정
                    </button>
                  </div>
                );
              })}
            {state.matches('book.isShowModal') && (
              <div className={styles.modal}>
                <h4>삭제 실패</h4>
                <p>삭제를 실패했습니다</p>
                <button onClick={() => send('CLICK_CHECK_BTN')}>확인</button>
              </div>
            )}
          </>
        )}
        {state.matches('movie') && (
          <>
            <h2>영화</h2>
            {state.matches('movie.init') && <h3>영화 불러오는중...</h3>}
            {state.matches('movie.inEmpty') && <h3>영화가 없습니다</h3>}
            {state.matches('movie.inLoaded') &&
              state.context.movies.map((movie, idx) => {
                return (
                  <div className={styles.content}>
                    {movie.movie_title}
                    <button
                      onClick={() => send('DELETE_MOVIE', { id: movie.id })}
                    >
                      삭제
                    </button>
                  </div>
                );
              })}
            {state.matches('movie.isShowModal') && (
              <div className={styles.modal}>
                <h4>삭제 실패</h4>
                <p>삭제를 실패했습니다</p>
                <button onClick={() => send('CLICK_CHECK_BTN')}>확인</button>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
