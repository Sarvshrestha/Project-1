import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { editUser } from "../../redux/userSlice";
// import Button from "../../components/Button";

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const navigate = useNavigate();
  const existingUser = users.find((user) => user.id === params.id);
  const { name, Assignee, Task, description } = existingUser;
  const [values, setValues] = useState({
    name,
    Assignee,
    Task,
    description,
  });

  const handleEditUser = () => {
    if (
      values.name.trim() === '' ||
      values.Assignee.trim() === '' ||
      values.Task.trim() === '' ||
      values.description.trim() === ''
    ) {
      alert('Please fill out all fields.');
      return;
    }


    setValues({ name: "", Assignee: "", Task: "", description: "" });
    dispatch(
      editUser({
        id: params.id,
        name: values.name,
        Assignee: values.Assignee,
        Task: values.Task,
        description: values.description,
      })
    );
    navigate("/");
  };

  return (
    <>
      <h1 className="text-center text-5xl font-medium">Edit Task/ Description</h1>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Form className="grid gap-2 block" style={{ margin: "15rem" }}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a Name"
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  className="border p-2 rounded block"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 block" controlId="formAssignee">
                <Form.Label>Assignee</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Assignee"
                  value={values.Assignee}
                  onChange={(e) =>
                    setValues({ ...values, Assignee: e.target.value })
                  }
                  className="border p-2 rounded block"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 block" controlId="formTask">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the task no"
                  value={values.Task}
                  onChange={(e) =>
                    setValues({ ...values, Task: e.target.value })
                  }
                  className="border p-2 rounded block"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 block" controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the description"
                  value={values.description}
                  onChange={(e) =>
                    setValues({ ...values, description: e.target.value })
                  }
                  className="border p-2 rounded block"
                  required
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleEditUser}
                className="bordered-box bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Update
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default EditUser;
