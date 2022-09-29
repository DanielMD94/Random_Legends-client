import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavbarComponent.css'
const NavbarComponent = () => {
    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as="span"><img className="NavbarLogo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1663313193/LogoDorado_xilewd.png" />Random Legends</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/">Home</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/login">Login</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/signup">Sign Up</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/profile/:id">My Profile</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/randomPick">Random Pick</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/champions">Champions</Link>
                    </Nav.Link>
                    <Nav.Link as='span'>
                        <Link className='link-react' to="/weekly-rotation">Weekly Rotation</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;