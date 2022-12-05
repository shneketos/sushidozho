import React from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import ItemsBlock from "../components/ItemsBlock";
import Skeleton from "../components/Skeleton";

export const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://637d04ca16c1b892ebc5bfcd.mockapi.io/Items")
      .then((res) => {
        return res.json();
      })
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Nav />
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

export default Home;
