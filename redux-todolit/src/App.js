import { Route, Routes } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import AddTask from "./pages/Home/AddTask";
import EditTask from "./pages/Home/EditTask";
import TaskList from "./pages/Home/TaskList";
import Header from "./components/Header/header";
import Product from "./pages/Productdetail/product";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Home from "./pages/Login/Home";
import {auth} from './firebase';


function App() {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);


  return (
    <div>
      
      {/* <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add-task" element={<AddTask />} />
        <Route path="/edit-task/:id" element={<EditTask />} />
        <Route element={<Nav />} />
      </Routes> */}
      {/* <Header /> */}
      <Product />

      {/* <Routes>
      <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<Signup />} />
       <Route path="/" element={<Home name={userName} />} />
      </Routes> */}
     
    </div>
  );
}

export default App;
