import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { Container, Form, Button } from "react-bootstrap";

const TaskInput = ({ refreshData }) => {
  const serviceId = "service_jh6h1va";
  const templateId = "template_5my2xuf";
  const publicId = "IzpepU9PqwBZ3Fq-t";

  const empname = useRef(null);
  const empnumber = useRef(null);
  const empemail = useRef(null);
  const empposition = useRef(null);

  const addtaskdata = (e) => {
    e.preventDefault();
    const insert = {
      empname: empname.current.value,
      empnumber: empnumber.current.value,
      empemail: empemail.current.value,
      empposition: empposition.current.value,
    };

    // Send email using emailjs
    emailjs.sendForm(serviceId, templateId, insert, publicId)
      .then(() => {
        console.log("email sent");
      })
      .catch((err) => {
        console.error(err);
      });

    // Add new task via Axios
    axios.post(`http://localhost:8000/tasks`, insert).then(() => {
      Swal.fire("Thanks for adding your details, our team will give caution about it soon.");
      // Refresh the task list in the parent component
      refreshData();
    }).catch((err) => {
      console.error("Error adding task:", err);
    });

    e.target.reset();
  };

  return (
    <Container className="mt-5 p-5 w-50 mx-auto">
      <div className="p-4 border rounded shadow">
        <h1 className="text-center mb-4">Add Employee data </h1>
        <Form onSubmit={addtaskdata}>
          <Form.Group className="mb-3">
            <Form.Label>Employee Name</Form.Label>
            <Form.Control
              type="text"
              ref={empname}
              placeholder="Enter employee name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Number</Form.Label>
            <Form.Control
              type="text"
              ref={empnumber}
              placeholder="Enter employee number"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Email</Form.Label>
            <Form.Control
              type="email"
              ref={empemail}
              placeholder="Enter employee email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Employee Position</Form.Label>
            <Form.Select ref={empposition} required>
              <option value="React dev.">React dev.</option>
              <option value="PHP dev.">PHP dev.</option>
              <option value="MERN stack dev.">MERN stack dev.</option>
              <option value="Frontend dev.">Frontend dev.</option>
              <option value="Backend dev.">Backend dev.</option>
              <option value="Fullstack dev.">Fullstack dev.</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100 mt-3">
            Add Employee
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default TaskInput;
