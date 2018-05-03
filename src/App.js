import React from "react";

import ImageList from "./containers/ImageList";

// components から containers へ変更
import Search from "./containers/Search";

const App = () => {
  return (
    <div>
      <Search />
      <ImageList />
    </div>
  );
};

export default App;
