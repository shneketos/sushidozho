import React from "react";

function Categories({ value, onClickCategory }) {
  const categories = ["Все", "Пицца", "Сеты", "Роллы", "Суши"];

  return (
    <nav>
      <div className="nav">
        {categories.map((categoryName, i) => (
          <div
            key={i}
            onClick={() => onClickCategory(i)}
            className={value === i ? "active" : ""}
          >
            {categoryName}
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Categories;
