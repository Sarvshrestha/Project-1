import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "../../components/Button";
import { deleteUser } from "../../redux/userSlice";
import {Table, Button} from 'react-bootstrap';
import React, {Fragment} from 'react'

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () =>
    users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.Assignee}</td>
        <td>{user.Task}</td>
        <td>{user.description}</td>
        <td>
          <Link to={`edit-task/${user.id}`}>
            <Button className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Edit </Button>
          </Link>
        </td>
        <td>
          <Button onClick={() => handleRemoveUser(user.id)} className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Delete</Button>
        </td>
      </tr>
    ));

  return (
    <Fragment>
    <h1 className="text-center text-5xl font-medium">Task to Do List</h1>
    <div style={{ margin: "10rem", padding:'22px'}}>
      <Link to="/add-task">
        <Button className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"> Add Task Details </Button>
      </Link>
      <Table style={{ width: "70%", margin: "auto" }} className="table-auto border-collapse border-slate-400">

        <thead>
          <tr className="my-3 py-2">
            <th>Name</th>
            <th>Assignee</th>
            <th>Task</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="my-4 space-y-0.5 text-center border-spacing-y-0.5">
   {users.length ? (
      renderCard()
   ) : (
      <tr className="my-4 space-y-0.5">
         <td colSpan="6" className="my-4">
            No User
         </td>
      </tr>
   )}
</tbody>
      </Table>
    </div>
    </Fragment>
  );
};

export default UserList;
