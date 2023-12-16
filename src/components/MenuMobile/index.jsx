import React from "react";
import { push as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const index = (props) => {
    return (
        <Menu {...props}>
            <Link to="/#nosotros">nosotros</Link>
            <Link to="/#servicios">servicios</Link>
            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/comunidad"
            >
                comunidad
            </NavLink>
            <NavLink
                activeClassName="navbar-links-active"
                className="bm-item"
                to="/tour"
            >
                tour 360°
            </NavLink>
            <Link to="/#contacto">contacto</Link>
        </Menu>
    );
};

export default index;
