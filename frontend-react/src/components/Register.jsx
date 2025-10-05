import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userData = {
      username,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/register/",
        userData
      );
      console.log(response.data);
      console.log("Registration successful");
      setErrors({});
      setSuccess(true);
    } catch (error) {
      setErrors(error.response.data);
      console.log("registration error", error.response.data);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark pd-5 rounded">
            <h3 className="text-ligh text-center">Create an account</h3>
            <form onSubmit={handleRegistration}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUserame(e.target.value)}
                ></input>
                <small>
                  {errors.username && (
                    <div className="test-danger">{errors.username}</div>
                  )}
                </small>
              </div>
              <div>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>

                <small>
                  {errors.password && (
                    <div className="test-danger">{errors.password}</div>
                  )}
                </small>
              </div>
              {success && (
                <div className="alert alert-success">
                  Registration Successful
                </div>
              )}
              {loading ? (
                <button
                  type="Submit"
                  className="btn btn-info d-block mx-auto"
                  disabled
                >
                  Please wait...
                </button>
              ) : (
                <button type="Submit" className="btn btn-info d-block mx-auto">
                  Register
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
