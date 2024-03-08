import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../../firebase";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  return (
    <div className='container text-center mt-6'>
      <div className=''>
        <h1 className='text-xl font-normal'>Login</h1>

        <Form.Group className="mb-3 block ">
        <Form.Label>Email</Form.Label>
        <Form.Control className="border p-2 rounded block m-auto"
           onChange={(event) =>setValues((prev) => ({ ...prev, email: event.target.value }))}
          placeholder="Enter email address"
        />
        </Form.Group>

        <Form.Group className="mb-3 block">
        <Form.Label>Password</Form.Label>
        <Form.Control className="border p-2 rounded block m-auto"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Enter Password"
        />
        </Form.Group>

        <div className=''>
          <b className=''>{errorMsg}</b>
          <Button disabled={submitButtonDisabled} onClick={handleSubmission} className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </Button>
          <p>
            Already have an  account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
