import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";

function ItemsBlock({ id, name, price, desc, img }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      img,
      desc,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="catalog-item-wrapper">
      <div className="catalog-item">
        <div className="catalog-item-img">
          <span>
            <img src={img} alt="img"></img>
          </span>
        </div>
        <div className="catalog-item-info">
          <div className="catalog-item-name">{name}</div>
          <div className="catalog-item-desc">{desc}</div>
          <div className="catalog-item-bottom">
            <div className="catalog-item-price">{price} ₽</div>
            <button onClick={onClickAdd} className="Additem">
              <b>+</b>
              <span>Добавить</span>
              {addedCount > 0 && <i>{addedCount}</i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsBlock;
