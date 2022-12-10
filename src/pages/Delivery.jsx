import React from "react";

export const Delivery = () => {
  return (
    <div className="Delivery">
      <div className="Delivery-header">Доставка и оплата</div>
      <div className="Delivery-header-item">Доставка</div>
      <div className="Delivery-politics">
        <ul className="Delivery-politics-items">
          <li className="Delivery-politics-items-item">
            <img src="../img/delivery.svg" alt="delivery" />
            <div>
              <h1>Доставка осуществляется при заказе от 990 ₽.</h1>
              <ul>
                <li>
                  Стоимость доставки 200 ₽. При заказе от 1 500 ₽ бесплатная
                  доставка.
                </li>
              </ul>
            </div>
          </li>
          <li className="Delivery-politics-items-item">
            <img src="../img/clock.svg" alt="clock" />
            <div>
              <h1>Время доставки зависит от зоны доставки.</h1>
              <ul>
                <li className="Delivery-politics-items-item-green">
                  Зеленая - от 30 минут
                </li>
                <li className="Delivery-politics-items-item-yellow">
                  Желтая - от 60 минут
                </li>
                <li className="Delivery-politics-items-item-red">
                  Красная - от 90 минут
                </li>
              </ul>
            </div>
          </li>
          <li className="Delivery-politics-items-item">
            <img src="../img/date.svg" alt="date" />
            <div>
              <h1>График работы</h1>
              <ul>
                <li>Принимаем и доставляем заказы с 08:00 до 05:00</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className="Payment">Оплата</div>
      <ul className="Payment-items">
        <li className="Payment-items-item">
          <img src="../img/credit.svg" alt="credit" />
          <h2>Банковской картой</h2>
          <p>
            Вы можете оплатить заказ на сайте банковской картой
            Visa,Mastercard,МИР.
          </p>
        </li>
        <li className="Payment-items-item">
          <img src="../img/nfc.svg" alt="nfc" />
          <h2>Безналичная оплата</h2>
          <p>
            Вы можете оплатить заказ безналичным способом, используя банковскую
            карту или через ваш смартфон с поддержкой NFC.
          </p>
        </li>
        <li className="Payment-items-item">
          <img src="../img/wallet.svg" alt="cash" />
          <h2>Наличными курьеру</h2>
          <p>Вы можете оплатить заказ курьеру при получении.</p>
        </li>
      </ul>
      <div className="Delivery-zones-title">Зоны доставки</div>
      <p className="Delivery-zones">
        <iframe
          title="delivery-zone"
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A6aeac2fb007fff3a2b1dc1456274afdec86ce4f99b5752e7694052c79a6da7b5&amp;source=constructor"
          width="100%"
          height="500"
          frameBorder="0"
        ></iframe>
      </p>
    </div>
  );
};

export default Delivery;
