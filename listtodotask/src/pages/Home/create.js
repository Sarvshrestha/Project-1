import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import { addTask } from '../../actions';

function Create() {
    console.log("ububwudbwus");
  const [Assigne, setAssigne] = useState('');
  const [id, setId] = useState('');
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const history = useNavigate();
  const dispatch = useDispatch();
  console.log("ububwudbwus");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuid().slice(0, 8);
    console.log("ububwudbwus",uniqueId);
    dispatch( addTask({
        ids: uniqueId,
        Assigne: Assigne,
        id: id,
        task: task,
        description: description,
      })
    );
    history('/');
  };

  return (
    <div>
      <Form className='d grid gap-2' style={{ margin: '15rem' }}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type='text' placeholder='Enter Assignee' required onChange={(e) => setAssigne(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formAge'>
          <Form.Control type='text' placeholder='Enter Id' required onChange={(e) => setId(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formTask'>
          <Form.Control type='text' placeholder='Enter Task' required  onChange={(e) => setTask(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formDescription'>
          <Form.Control type='text'  placeholder='Enter Description'  required onChange={(e) => setDescription(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
