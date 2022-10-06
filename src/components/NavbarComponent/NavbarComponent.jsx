import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './NavbarComponent.css'
import { useContext } from 'react';
import { AuthContext } from "../../context/auth.context";
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Button } from "@mui/material";
const NavbarComponent = () => {

    const { user, isLoading, isLoggedIn, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleLogOut = () => {
        setOpen(false);
        logOut();
    }



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
                        <Navbar.Collapse>
                            <Nav.Link as='span' style={{ cursor: 'pointer' }} onClick={() => { setOpen(true) }}>Log out</Nav.Link>

                            <NavDropdown title="Discover" className="dropdownNavbar">
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
                                    <Link className='link-react' to="/rivals">Rivals</Link>
                                </Nav.Link>
                            </NavDropdown>

                            <Nav.Link as='span'>
                                <Link className='link-react' to="/forum">Forum</Link>
                            </Nav.Link>
                            {
                                user?.role === 'CHALLENGER' &&

                                <Nav.Link as='span'>
                                    <Link className='link-react' to="/admin">Admin</Link>
                                </Nav.Link>
                            }
                            <Nav.Link className='navProfile' as='span'>
                                <Link className='link-react' to={`/profile/${user?._id}`}>{user?.username}</Link>
                            </Nav.Link>
                        </Navbar.Collapse>
                    }
                </Nav>
            </Container>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to logout?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you logout you will be kicked out to the homepage
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setOpen(false) }}>Dismiss</Button>
                    <Button onClick={handleLogOut} autoFocus>
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </Navbar>
    );
};

export default NavbarComponent;