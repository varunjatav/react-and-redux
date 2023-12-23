import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";



const Bag = () => {
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            <BagItem />
          </div>
          <div className="bag-summary">
            <BagSummary/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
