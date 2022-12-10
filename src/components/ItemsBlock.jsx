import React from "react";

function ItemsBlock({ name, price, desc, img }) {
  const [Count, setCount] = React.useState(0);

  const onClickAdd = () => {
    setCount(Count + 1);
  };
  const onClickDel = () => {
    setCount(Count - 1);
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
              <i>{Count}</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemsBlock;
