import React from 'react'
import { Container, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <div>
        <Container fluid className='bg-dark text-light'>
            <Row>
                <div className='col-md-9'><h1 className='fs-4'>ToDo App</h1></div>
                <div className='col-md-3 mt-2 text-end'>Total tasks:<span className='bi bi-bell badge badge-white'>0</span></div>
            </Row>
        </Container>
    </div>
  )
}
