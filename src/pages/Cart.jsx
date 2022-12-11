import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { clearItems } from "../redux/slices/cartSlice";
import CartEmpty from "../components/CartEmpty";

export const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.cartSlice);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div className="cart">
      <div className="cart-top">
        <h2 className="cart-top-title">Корзина</h2>
        <div onClick={onClickClear} className="cart-top-clear">
          <span>Очистить корзину</span>
        </div>
      </div>
      <div className="cart-items">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="cart-bottom">
          <div className="cart-bottom-details">
            <span>
              {" "}
              Всего : <b>{totalCount} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b> {totalPrice} ₽</b>{" "}
            </span>
          </div>
          <div className="cart-bottom-buttons">
            <Link to="/" className="button-back">
              <span>Вернуться назад</span>
            </Link>
            <div className="button-pay">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
