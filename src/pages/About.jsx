import React from "react";
export const About = () => {
  return (
    <div className="about">
      <div>О компании</div>
      <ul>
        <li className="about-top">
          Сушидо Жо - сеть доставки еды от известного российского рэпера Bushido
          Zho
          Шинкевич Никита РПИС-01 
        </li>
        <li>
          <div className="about-audio">
            <div className="about-audio-item">
              <div className="about-audio-item-tag">Bushido Zho - Тесно</div>
              <audio controls="controls" loop>
                <source src="./audio/tesno.mp3" type="audio/mp3" />
              </audio>
            </div>
            <div className="about-audio-item">
              <div className="about-audio-item-tag">Bushido Zho - Макинтош</div>
              <audio controls="controls" loop>
                <source src="./audio/mak.mp3" type="audio/mp3" />
              </audio>
            </div>
            <div className="about-audio-item">
              <div className="about-audio-item-tag">Bushido Zho - Водила</div>
              <audio controls="controls" loop>
                <source src="./audio/vodila.mp3" type="audio/mp3" />
              </audio>
            </div>
          </div>
        </li>
        <li>
          Заказывайте Ваши любимые блюда у нас, и Вы останетесь довольны
          качеством сервиса. У нас работают лучшие повара, а курьеры приятно
          порадуют вежливостью и быстрой доставкой. Наша продукция готовится
          только из свежайших ингредиентов непосредственно перед отправкой вам.
          Мы стараемся работать быстро и внимательно, исполняем пожелания
          клиентов. Мы не позволим Вам страдать от голода. Приятного аппетита!
        </li>
        <li>
          Тщательно отбираем только лучшие ингредиенты. Работаем с проверенными
          поставщиками. Если сливочный сыр, то Cremette. Если креветка, то
          Индийская. Лосось - с Фарерских Островов. Вся наша продукция проходит
          строгую сертификацию на соответствие высшего стандарта качества
          Евразийского Экономического Союза (EAC). Профессиональная команда
          поваров под руководством опытного Бренд-шефа сочетают и открывают
          новые грани вкуса. Все соусы собственного производства, включая
          соевый! В нашем ассортименте вы найдете большой ассортимент
          пиццы,роллов,суши! Мы ежедневно работаем над тем, чтобы каждое блюдо
          было не только вкусным, но и красивым. Своими руками создаем
          коралловые чипсы, отбираем лучшую микрозелень, изготавливаем авторский
          кунжут кимчи! Все это и многое другое украшает нашу продукцию, делая
          ее уникальной.
        </li>
      </ul>
    </div>
  );
};

export default About;
