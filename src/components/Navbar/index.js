// Navbar.js
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
  position: absolute;
  height: 56px;
  left: 0px;
  right: 0px;
  top: 0px;
`;

const MadelynTorff = styled.div`
  position: absolute;
  width: 130px;
  height: 32px;
  left: 120px;
  top: 12px;
  font-family: "Comfortaa";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 180%;
  color: #25282b;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  position: absolute;
  width: 292px;
  height: 28px;
  right: 120px;
  top: 14px;
`;

const Navbar = () => {
  return (
    <Header>
      <MadelynTorff>Madelyn Torff</MadelynTorff>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/add-project">Add Project</Link>
        <Link to="/Project">Projects</Link>
      </Navigation>
    </Header>
  );
};

export default Navbar;
