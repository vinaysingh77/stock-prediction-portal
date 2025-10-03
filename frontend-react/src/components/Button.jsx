import React from "react";

const Button = (props) => {
  return (
    <>
      {/* <a className="btn btn-info text-light" href="">
        login
      </a> */}
      <a className={`btn ${props.class} text-light`} href="">
        {props.text}
      </a>
    </>
  );
};

export default Button;
