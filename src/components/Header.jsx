import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice";
function Header() {
  const { items, totalPrice } = useSelector(selectCart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header-logo">
            <img width={200} src="/img/l2.png" alt="logo" />
          </div>
        </Link>
        <div className="header-center">
          <Link to="/">Главная</Link>
          <Link to="/catalog">Меню</Link>
          <Link to="/delivery">Доставка</Link>
          <Link to="/about-us">О компании</Link>
        </div>
        <div className="header-cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice} ₽</span>
            <div className="delimiter">|</div>
            <img width={26} height={26} src="/img/cart.svg" alt="cart" />
            <span>{totalCount}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
