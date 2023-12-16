import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logoIan from "../../assets/img/logo-punto-ian.png";
import MenuMobile from "../MenuMobile";

const Navbar = () => {
    const [changeStyle, setChangeStyle] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setChangeStyle(true);
        } else {
            setChangeStyle(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);
    return (
        <nav className={changeStyle ? "navbar scrolled" : "navbar"}>
            <NavLink to="/">
                <div className="navbar-logo">
                    <img loading="lazy" src={logoIan} alt="Logo Punto Ian" />
                </div>
            </NavLink>

            <div className="navbar-icon-hamburg">
                <MenuMobile right />
            </div>
            <div className="navbar-links">
                <ul>
                    <li className="hvr-underline-from-center">
                        <Link to="/#nosotros">nosotros</Link>
                    </li>
                    <li className="hvr-underline-from-center">
                        <Link to="/#servicios">servicios</Link>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="/comunidad"
                        >
                            comunidad
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <NavLink
                            activeClassName="navbar-links-active"
                            to="/tour"
                        >
                            tour 360°
                        </NavLink>
                    </li>
                    <li className="hvr-underline-from-center">
                        <Link to="/#contacto">contacto</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
