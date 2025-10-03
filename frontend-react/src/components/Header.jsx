import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-2 pb-2 align-items-start">
        <a className="navbar brand text-light" href="">
          Stock Prediction Portal
        </a>

        <div>
          <Button text="login" class="btn-info" />
          &nbsp;
          {/* <a className="btn btn-info text-light" href="">
            Register
          </a> */}
          <Button text="Register" class="btn-outline-info" />
        </div>
      </nav>
    </>
  );
};

export default Header;
