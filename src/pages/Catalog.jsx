import React from "react";

import Categories from "../components/Categories";
import ItemsBlock from "../components/ItemsBlock";
import Skeleton from "../components/Skeleton";

export const Catalog = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setcategoryId] = React.useState(0);

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://637d04ca16c1b892ebc5bfcd.mockapi.io/Items?${
        categoryId > 0 ? `category=${categoryId}` : ""
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="wrapper">
      <Categories
        value={categoryId}
        onClickCategory={(id) => setcategoryId(id)}
      />
      <div className="catalog-wrapper">
        <div className="title">
          <h1>Все</h1>
        </div>
        <div className="catalog-list">
          {isLoading
            ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <ItemsBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
