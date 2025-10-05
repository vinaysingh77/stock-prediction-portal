import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar container pt-2 pb-2 align-items-start">
        <Link className="navbar brand text-light" to="/">
          Stock Prediction Portal
        </Link>

        <div>
          <Button text="login" class="btn-info" url="/login" />
          &nbsp;
          {/* <a className="btn btn-info text-light" href="">
            Register
          </a> */}
          <Button text="Register" class="btn-outline-info" url="/register" />
        </div>
      </nav>
    </>
  );
};

export default Header;
