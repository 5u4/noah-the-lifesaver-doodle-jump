import React from "react";

export const IndexPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src="/assets/Banner.gif" alt="banner" />
      <iframe src="/game/index.html" width="512" height="768" frameBorder="0" />
    </div>
  );
};

export default IndexPage;
