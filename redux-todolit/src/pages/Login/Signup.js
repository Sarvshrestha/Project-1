import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

import {auth, database} from '../../firebase';
import {Button, Form} from 'react-bootstrap';
import { XORCipher } from "./XORCipher";



function Signup() {

  const dataBaseref = collection( database, "Users Data")
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = async() => 
  {
    try {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Please fill all the fields");
        alert(errorMsg);
        return;
      } else if (values.pass.length < 6) {
        setErrorMsg("The password must be greater than 6 letters");
        alert(errorMsg);
        return;
      }
 
      setErrorMsg("");
      setSubmitButtonDisabled(true);
 
      const matchEmail = query(dataBaseref, where('Email', '==', values.email));
      const snapshot = await getDocs(matchEmail);
      const emailMatching = snapshot.docs.map((doc) => doc.data());
 
      if (emailMatching.length > 0) {
        setSubmitButtonDisabled(false);
        alert("This Email is already exist, Please try with other accounts");
      } else {
        const encryptpassword = XORCipher.encode('AIzaSyB3LjonoJlj-BlUFAvu7hXUcRSdZcGekPA', values.pass)
        const res = await createUserWithEmailAndPassword(auth, values.email, values.pass);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        await addDoc(dataBaseref, { Name: values.name, Email: values.email, Password: encryptpassword });
        setSubmitButtonDisabled(false);
        alert("Sign-up successful");
        navigate("/");
      }
    } catch (error) {
      setSubmitButtonDisabled(false);
      alert(error);
      console.log("error", error);
    }
  }

  return (
    <div className=' text-center mt-6'>
      <div className=''>
        <h1 className='text-xl font-normal'>Signup</h1>

        <Form.Group className="mb-3 block">
        <Form.Label>Name</Form.Label>
        <Form.Control className="border p-2 rounded block m-auto"
           placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        </Form.Group>
        
        <Form.Group className="mb-3 block">
            <Form.Label>Email</Form.Label>
        <Form.Control className="border p-2 rounded block m-auto"
           placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        </Form.Group>

        <Form.Group className="mb-3 block">
            <Form.Label>Password</Form.Label>
        <Form.Control className="border p-2 rounded block m-auto"
          label="Password" placeholder="Enter password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        </Form.Group>

        <div className=''>
          <b className=''>{errorMsg}</b>
          <Button onClick={handleSubmission} disabled={submitButtonDisabled} className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Signup
          </Button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
