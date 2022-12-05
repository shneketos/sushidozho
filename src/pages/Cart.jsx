import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  return (
    <div class="cart">
      <div class="cart-top">
        <h2 class="cart-top-title">Корзина</h2>
        <div class="cart-top-clear">
          <span>Очистить корзину</span>
        </div>
      </div>
      <div class="cart-items">
        <div class="cart-item">
          <div class="cart-item-img">
            <img
              class="catalog-item-img"
              src="../img/rolls/fila.jpg"
              alt="name"
            />
          </div>
          <div class="cart-item-info">
            <h3>Fila</h3>
            <p>Opisanie</p>
          </div>
          <div class="cart-item-count">
            <div class="button button--minus">
              <img src="../img/minus.svg" alt="-" />
            </div>
            <b>2</b>
            <div class="button button--plus">
              <img src="../img/plus.svg" alt="-" />
            </div>
          </div>
          <div class="cart-item-price">
            <b>500 ₽</b>
          </div>
          <div class="cart-item-remove">
            <div class="button button--del">
              <img src="../img/del.svg" alt="x" />
            </div>
          </div>
        </div>
        <div class="cart-bottom">
          <div class="cart-bottom-details">
            <span>
              {" "}
              Всего : <b>1 шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>500 ₽</b>{" "}
            </span>
          </div>
          <div class="cart-bottom-buttons">
            <Link to="/" class="button-back">
              <span>Вернуться назад</span>
            </Link>
            <div class="button-pay">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
