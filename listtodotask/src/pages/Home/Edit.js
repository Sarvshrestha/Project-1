
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { editTask, taskId} from '../../actions';

 
 
function Edit() {
    const navigate = useNavigate();
   
    const dispatch = useDispatch();
    const editTaskId = useSelector((state) => state.tasks.editTaskId);
    // console.log('taskId',taskId);
  


    const tasks = useSelector((state) => state.tasks);
    console.log('Task for edit :', tasks);
 
    const [id, setId] = useState(editTaskId || '');
    const [description, setDescription] = useState("");
    console.log('Description',description);
    // const [values, setvalues] = useState({
    //     id:id,
    //     tasks:tasks,
    //     description:description
    // })
    // console.log('Values to show ion edit', values)

    // const storeaeg = localStorage.setItem('id', JSON.stringify({ id: id, description: description }));
    // console.log('storeaeg',storeaeg);

 
    useEffect(() => {
        const storedId = localStorage.getItem('id');
        console.log('StoredID',storedId);
        if (storedId) {
            setId(storedId.id);
            setDescription(storedId.description);
        }
    }, []);
 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dispatching editTask with:", id, { id: id, description });
        dispatch(editTask(id, { id: id, description:description }));
        console.log("Dispatching editTask afters:", id, { id: id, description });
      
        navigate("/");
      }
 
    return (
        <div>
            <h1> Edit Page</h1>
            <Form className='d grid gap-2' style={{ margin: "12rem" }}>
                <Form.Group className='mb-3' controlId='formId'>
                    <Form.Control type='text' placeholder='Enter ID of Developer' value={id} required onChange={(e) => setId(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formDescription'>
                    <Form.Control type='text' placeholder='Enter description of Task' value={description} required onChange={(e) => setDescription(e.target.value)}></Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type='submit'>Update</Button>
            </Form>
        </div>
    );
}
 
export default Edit;
 