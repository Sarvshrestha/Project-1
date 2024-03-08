import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../../actions';
import { Button, Table } from 'react-bootstrap';

function Home(props) {
    console.log("ububwudbwus");
    let history = useNavigate();
    const dispatch = useDispatch();
    const developerData = useSelector((state) => state.tasks.Developer);

    const handleEdit = (id, description) =>{
    dispatch(editTask({id, description}))
   }

    const handleDelete = (id) => {
        dispatch(deleteTask(id));

        const index = developerData.findIndex(item => item.id === id);

        if (index !== -1) {
            developerData.splice(index, 1);
            history('/');
        }
    }

    return (
        <div>
            <Fragment>
            <h1> Task to do List</h1>
                <div style={{ margin: "10rem" }}>
              
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Developers</th>
                                <th>Assignee</th>
                                <th>Tasks</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {developerData && developerData.length > 0 ? developerData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.Assigne}</td>
                                        <td>{item.id}</td>
                                        <td>{item.task}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <Link to='/edit'>
                                            <Button onClick={() => handleEdit(item.id, item.task, item.description)} style={{background:'black'}}>Edit</Button>
                                            </Link>
                                            &nbsp;
                                            <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            }) : "No data Available"}
                        </tbody>
                    </Table>
                    <br />
                    <Link className='d-grid gap-2' to='/create'>
                        <Button size='lg'>Create</Button>
                    </Link>
                </div>
            </Fragment>
        </div>
    )
}

export default Home;