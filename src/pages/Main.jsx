import React from "react";
export const Main = () => {
  return (
    <div className="main">
      <div className="main-upper">
        <img src="../img/sushidozho2.png" alt="logo" />
        <div className="main-info">
          <div className="main-info-desc">
            <h1>Сушидо Жо</h1>
            <span>Доставка пиццы,роллов,суши и др.</span>
          </div>
          <div className="main-info-items">
            <div className="main-info-item">
              <img src="../img/clock.svg" alt="clock" />
              <div className="main-info-item-desc">
                <div>До 90 мин</div>
                <span>время доставки</span>
              </div>
            </div>
            <div className="main-info-item">
              <img src="../img/wallet.svg" alt="wallter" />
              <div className="main-info-item-desc">
                <div>990 ₽</div>
                <span>мин. сумма заказа</span>
              </div>
            </div>
            <div className="main-info-item">
              <img src="../img/delivery.svg" alt="delivery" />
              <div className="main-info-item-desc">
                <div>200 ₽</div>
                <span>стоимость доставки</span>
              </div>
            </div>
            <div className="main-info-item">
              <img src="../img/medal.svg" alt="medal" />
              <div className="main-info-item-desc">
                <div>от 1500 ₽</div>
                <span>Бесплатная доставка</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
