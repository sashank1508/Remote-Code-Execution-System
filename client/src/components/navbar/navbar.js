import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DropdownButton, Dropdown, Navbar, Button } from "react-bootstrap";

function NavbarComponent() {
  const [language, setLanguage] = useState("C++");
  const [theme, setTheme] = useState(0);
  {
    /*  theme 0 for white and 1 for black) */
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Code Clan </Navbar.Brand>
        <Button variant="light" size="sm">
          Change Theme
        </Button>
        <Button> Run code </Button>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.Item as="button">C++</Dropdown.Item>
          <Dropdown.Item as="button">Javascript</Dropdown.Item>
          <Dropdown.Item as="button">Python</Dropdown.Item>
        </DropdownButton>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
