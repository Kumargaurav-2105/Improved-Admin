import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
const AdminNav=()=>{
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>Home</Link>
            <Link to='/addjobs' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>Add Jobs</Link>
            <Link to='/myjobs' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>My Jobs</Link>
            <Link to='/Applicants' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>View Job Applicants</Link>
            <Link to='/profile' style={{textDecoration: 'none', color:"white", margin:'0.5rem'}}>Edit Profile</Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AdminNav;