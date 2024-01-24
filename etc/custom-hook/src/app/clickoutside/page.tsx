/** @format */
"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "./clickoutside.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";

const page = () => {
  //vanilla logic
  useEffect(() => {
    const modal_wrap = document.querySelector("#modal_wrap");
    const modal_background = document.querySelector("#modal_background");
    const modalBtn = document.getElementById("modal_btn");

    console.log(modalBtn);

    //Show modal
    modalBtn?.addEventListener("click", () => {
      open();
    });

    //Hide modal
    document.querySelector("#modal_close")?.addEventListener("click", () => {
      close();
    });

    //Hide modal
    window.addEventListener("click", (e) => {
      e.target === modal_background ? close() : false;
    });
    function close() {
      modal_wrap?.classList.remove(`${style.showModal}`);
      modal_background?.classList.remove(`${style.showModal}`);
    }
    function open() {
      modal_wrap?.classList.add(`${style.showModal}`);
      modal_background?.classList.add(`${style.showModal}`);
    }
  }, []);

  // react hook logic
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalRef = useRef(null);
  useClickOutside(modalRef, () => {
    setIsOpenModal(false);
  });

  return (
    <div className={style.container}>
      <div className={style.hookContainer}>
        <h2>VanillaJS</h2>
        <button type="button" id="modal_btn">
          모달창 키기
        </button>
        <div className={style.modalBackground} id="modal_background"></div>
        <div className={style.modalWrap} id="modal_wrap">
          <div className={style.modalClose} id="modal_close">
            x
          </div>
          <div className={style.modalText}>모달</div>
        </div>
      </div>
      <div className={style.hookContainer}>
        <h2>React Hook</h2>
        <button
          onClick={() => {
            setIsOpenModal(true);
          }}>
          Open modal
        </button>
        {isOpenModal && (
          <div className={style.hookModalContainer}>
            <div className={style.hookModal} ref={modalRef}>
              Hook Modal 입니다
              <button
                onClick={() => {
                  setIsOpenModal(false);
                }}>
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
