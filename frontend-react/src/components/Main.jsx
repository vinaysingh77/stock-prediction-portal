import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      <div className="contaier">
        <div className="p-4 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction App</h1>
          <p className="text-light lead">
            WallStreetZen is the best free AI stock predictor with its Zen
            Ratings system, which evaluates stocks on 115 factors proven to
            drive growth in stocks. Its AI factor paired with traditional
            fundamental and technical checks gives you a well-rounded look at a
            stock's short and long-term prospects
          </p>
          <Button text="Login" class="btn-info" />
        </div>
      </div>
    </>
  );
};

export default Main;
