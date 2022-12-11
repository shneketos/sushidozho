import React from "react";
import { addItem, removeItem, minusItem } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
export const CartItem = ({ id, name, price, count, img }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="cart-item">
      <div className="cart-item-img">
        <img className="catalog-item-img" src={img} alt="name" />
      </div>
      <div className="cart-item-info">
        <h3>{name}</h3>
      </div>
      <div className="cart-item-count">
        <button onClick={onClickMinus} className="button button--minus">
          <img src="../img/minus.svg" alt="-" />
        </button>
        <b>{count}</b>
        <button onClick={onClickPlus} className="button button--plus">
          <img src="../img/plus.svg" alt="-" />
        </button>
      </div>
      <div className="cart-item-price">
        <b>{price * count}₽</b>
      </div>
      <button onClick={onClickRemove} className="cart-item-remove">
        <div className="button button--del">
          <img src="../img/del.svg" alt="x" />
        </div>
      </button>
    </div>
  );
};

export default CartItem;
