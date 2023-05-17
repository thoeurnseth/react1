import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
function Header(){
    return(
        <Navbar bg="primary" variant="dark">
        <Container>
            <div class="wrapper-header">
                <div>
                <Navbar.Brand href="">Home Page</Navbar.Brand>
                </div>
                <div>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/Update/id">Update</Nav.Link> */}
                    {/* <Nav.Link href="/Delete">Delete</Nav.Link> */}
                    <Nav.Link href="/Blog">Blog</Nav.Link>
                    <Nav.Link href="/Product">Product</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
                </div>
            </div>
        </Container>
    </Navbar>
    );
}
export default Header;