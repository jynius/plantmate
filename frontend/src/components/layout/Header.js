import React from "react";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/header.css";

const Header = () => {
  // Replace "userNickname" with the actual user's nickname
  const userNickname = "John Doe";

  return (
    <header className='header'>
      <Navbar bg='green' variant='dark' expand='lg'>
        <Container className='header-container'>
          <Navbar.Brand href='#home'>PlantMate</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='search' className='nav-link'>
                식물 검색
              </Nav.Link>
              <Nav.Link href='community' className='nav-link'>
                커뮤니티
              </Nav.Link>
              <NavDropdown
                title='내 식물 관리'
                id='my-plants-dropdown'
                className='nav-link'
              >
                <NavDropdown.Item href='my-plants'>내식물</NavDropdown.Item>
                <NavDropdown.Item href='growth-journal'>
                  내 식물 성장일지
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className='ml-auto'>
              <Button variant='light' className='mr-2 transparent-button'>
                {userNickname}님
              </Button>
              <Button variant='light' className='transparent-button'>
                회원정보
              </Button>
              <Button variant='light' className='transparent-button'>
                로그아웃
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
