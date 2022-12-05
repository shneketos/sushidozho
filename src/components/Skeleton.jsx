import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="catalog-list"
    speed={2}
    width={317}
    height={441}
    viewBox="0 0 317 441"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="3" rx="0" ry="0" width="296" height="250" />
    <rect x="-1" y="275" rx="5" ry="5" width="296" height="24" />
    <rect x="0" y="320" rx="5" ry="5" width="296" height="72" />
    <rect x="0" y="405" rx="0" ry="0" width="45" height="25" />
    <rect x="173" y="405" rx="0" ry="0" width="120" height="25" />
  </ContentLoader>
);

export default Skeleton;
