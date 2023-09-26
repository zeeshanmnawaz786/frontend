import React from "react";
import LeftLine from "./component/LeftLine";
import TopCards from "./component/TopCards";
import BelowCards from "./component/BelowCards";

function App() {
  return (
    <div className="min-h-screen flex" style={{ backgroundColor: "#2a2649" }}>
      <LeftLine />
      <div className="w-screen p-8">
        <TopCards />
        <BelowCards />
      </div>
    </div>
  );
}

export default App;
