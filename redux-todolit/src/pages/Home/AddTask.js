import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, InputGroup} from "react-bootstrap";
import { addUser } from "../../redux/userSlice";
// import Button from "../../components/Button";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    Assignee: '',
    Task: '',
    description: '',
  });

  const handleAddUser = () => {
    if (
      values.name.trim() === '' ||
      values.Assignee.trim() === '' ||
      values.Task.trim() === '' ||
      values.description.trim() === ''
    ) {
      alert('Please fill out all fields.');
      return ;
    }


    setValues({ name: '', Assignee: '', Task: '', description: '' });
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      Assignee: values.Assignee,
      Task: values.Task,
      description: values.description
    }));
    navigate('/');
  }

  return (
    <div >
      <h1 className="text-center text-5xl font-medium"> Add Details  </h1>
      <Form  className='d grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId="formName" style={{ fontSize: '16px', display:"block" }} >
          <Form.Label>Name  </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter a Name"
            value={values.name}
            className="border p-2 rounded"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
            style={{ fontSize: '20px', display: "block"}}
            required
          />
       
        </Form.Group>
        <Form.Group className='mb-3' controlId="formAssignee">
          <Form.Label>Assignee  </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enater a Assignee"
            value={values.Assignee}
            className="border p-2 rounded"
            required
            onChange={(e) => setValues({ ...values, Assignee: e.target.value })}
            style={{ fontSize: '20px', display: "block"}}
          />
         
        </Form.Group>
        <Form.Group className='mb-3' controlId="formTask">
          <Form.Label>Task  </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your task no"
            value={values.Task}
            className="border p-2 rounded"
            aria-required
            onChange={(e) => setValues({ ...values, Task: e.target.value })}
            style={{ fontSize: '20px', display: "block"}}
          />
        
        </Form.Group>
        <Form.Group className='mb-3' controlId="formDescription">
          <Form.Label>Description  </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your description"
            value={values.description}
            className="border p-2 rounded"
            onChange={(e) => setValues({ ...values, description: e.target.value })}
            style={{ fontSize: '20px', display: "block"}}
            required
          />
        
        </Form.Group>
        <Button variant="primary" onClick={handleAddUser} style={{margin:'10px 0px 0px 0px'}}  className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddUser;
