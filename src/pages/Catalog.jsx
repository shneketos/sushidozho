import React from "react";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { setCategoryId, setFilters } from "../redux/slices/filterSlice";
import { fetchItems } from "../redux/slices/itemSlice";
import Categories from "../components/Categories";
import ItemsBlock from "../components/ItemsBlock";
import Skeleton from "../components/Skeleton";

export const Catalog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const categoryId = useSelector((state) => state.filterSlice.categoryId);

  const { items, status } = useSelector((state) => state.itemSlice);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getItems = async () => {
    dispatch(fetchItems({ categoryId }));
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        categoryId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId]);

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      dispatch(setFilters({ ...params }));
    }
    isSearch.current = false;
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getItems();
    }
    isSearch.current = false;
  }, [categoryId]);

  return (
    <div className="wrapper">
      <Categories value={categoryId} onClickCategory={onClickCategory} />
      <div className="catalog-wrapper">
        <div className="title">
          <h1>Все</h1>
        </div>
        <div className="catalog-list">
          {status === "loading"
            ? [...new Array(12)].map((_, index) => <Skeleton key={index} />)
            : items.map((item) => <ItemsBlock key={item.id} {...item} />)}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
