import React from "react";
import { Link } from "react-router-dom";

export const CartEmpty = () => {
  return (
    <>
      <div className="CartEmpty">
        <h2>Корзина пустая</h2>
        <p>
          Вероятней всего, Вы еще ничего не добавили в корзину.
          <br />
          Для того, чтобы выбрать товар, перейдите во вкладку меню.
        </p>
        <div className="smile">😕</div>
        <button className="buttontomenu">
          <Link to="/catalog">Выбрать товар</Link>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
