import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <>
      {/* <a className="btn btn-info text-light" href="">
        login
      </a> */}
      <Link className={`btn ${props.class} text-light`} to={props.url}>
        {props.text}
      </Link>
    </>
  );
};

export default Button;
