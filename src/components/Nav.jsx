import React from "react";

function Nav() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = ["Все", "Популярное", "Пицца", "Сеты", "Роллы", "Суши"];

  const onClickNav = (index) => {
    setActiveIndex(index);
  };
  return (
    <nav>
      <div className="nav">
        {categories.map((value, index) => (
          <div
            key={index}
            onClick={() => onClickNav(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {value}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
