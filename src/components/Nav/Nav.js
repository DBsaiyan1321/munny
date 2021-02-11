import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { GiMoneyStack } from "react-icons/gi";

const Nav = () => { 
    return (
        <nav className="navbar">
            <Link to="/"><GiMoneyStack className="navbar__logo" /></Link>
        </nav>
    )
};

export default Nav;