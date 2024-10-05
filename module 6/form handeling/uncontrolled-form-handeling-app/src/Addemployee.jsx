import React, { useRef } from 'react';
import { Container, Form, Row, Button } from "react-bootstrap"; // Imported Button
import adempimg from './assets/images/emp.gif';
import Swal from 'sweetalert2';

export default function AddEmployee() {
    // Uncontrolled form handling
    const stdname = useRef("");
    const stdemail = useRef("");
    const stdage = useRef("");
    const stdclass = useRef("");
    const stdID = useRef("");
    const stdaddress = useRef("");
    const sclname = useRef("");

    // Form submission function
    const Addformsubmit = (e) => {
        e.preventDefault();
        var insert = {
            stdname: stdname.current.value,
            stdemail: stdemail.current.value,
            stdage: stdage.current.value,
            stdclass: stdclass.current.value,
            stdID: stdID.current.value,
            stdaddress: stdaddress.current.value,
            sclname: sclname.current.value,
        };

        // Print the values
        console.log(insert);

        // Pass a sweetalert message 
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });

        // Reset the form
        e.target.reset();
    }

    return (
        <Container className='p-5 mt-5 shadow'>
            <Row>
                <div className='col-md-4'>
                    <img src={adempimg} className='img-fluid' alt="Employee" />
                </div>
                <div className='col-md-8'>
                    <Form onSubmit={Addformsubmit}>
                        <Row>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={stdname} placeholder='Name of student *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={stdemail} placeholder='Email of student *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={stdage} placeholder='Age of student *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={stdclass} placeholder='Class of student *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={stdID} placeholder='Student ID *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={stdaddress} placeholder='Address of student *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                <input type='text' ref={sclname} placeholder='Name of the school *' className='form-control' />
                            </div>
                            <div className='form-group col-12 mt-3'>
                                {/* Using Button from react-bootstrap */}
                                <Button type='submit' className='btn btn-dark text-white btn-lg'>
                                    Add student
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </Row>
        </Container>
    );
}
