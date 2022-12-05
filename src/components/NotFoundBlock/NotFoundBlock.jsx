import React from "react";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>Sadge</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.desc}>К сожалению страница отсутсвует </p>
    </div>
  );
};

export default NotFoundBlock;
