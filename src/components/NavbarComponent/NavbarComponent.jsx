import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './NavbarComponent.css'
import { useContext } from 'react';
import { AuthContext } from "../../context/auth.context";
const NavbarComponent = () => {

    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);



    return (
        <Navbar bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand as="span"><img className="NavbarLogo" src="https://res.cloudinary.com/dalk1vcw9/image/upload/v1663313193/LogoDorado_xilewd.png" /></Navbar.Brand>
                <Nav className='me-auto'>
                    {!isLoading && !isLoggedIn ?
                        <>
                            <Nav.Link as='span'>
                                <Link className='link-react' to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link as='span'>
                                <Link className='link-react' to="/login">Login</Link>
                            </Nav.Link>
                            <Nav.Link as='span'>
                                <Link className='link-react' to="/signup">Sign Up</Link>
                            </Nav.Link>
                        </>
                        :
                        <>
                            <Nav.Link as='span' onClick={() => logOut()}>Log out</Nav.Link>
                            <Nav.Link as='span'>
                                <Link className='link-react' to={`/profile/${user?._id}`}>{user?.username}</Link>
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
                            <Nav.Link as='span'>
                                <Link className='link-react' to="/forum">Forum</Link>
                            </Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;