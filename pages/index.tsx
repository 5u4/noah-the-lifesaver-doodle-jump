import React from "react";

export const IndexPage: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img style={{ margin: 16 }} draggable={false} width="384" src="/assets/header.gif" alt="Noah the Lifesaver" />
      <iframe src="/game/index.html" width="512" height="768" frameBorder="0" />
    </div>
  );
};

export default IndexPage;
