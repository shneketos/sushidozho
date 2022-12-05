import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header-logo">
            <img width={200} src="/img/l2.png" alt="logo" />
          </div>
        </Link>
        <div className="header-center">
          <a href="/">Меню</a>
          <a href="/">Акции</a>
          <a href="/">Доставка</a>
          <a href="/">О нас</a>
        </div>
        <div className="header-cart">
          <Link to="/cart" className="button button--cart">
            <span>250 $</span>
            <div className="delimiter">|</div>
            <img width={26} height={26} src="/img/cart.svg" alt="cart" />
            <span>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;