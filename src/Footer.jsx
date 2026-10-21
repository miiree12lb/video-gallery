import React from "react";
import { Link } from "react-router-dom";
//@ts-ignore
import instagram from "./assets/images/socials/instagram-white.png";
//@ts-ignore
import linkedin from "./assets/images/socials/linkedin-white.png";
//@ts-ignore
import linktree from "./assets/images/socials/linktree-white.png";
//@ts-ignore
import logo from "./assets/images/logo.png";

export default function Footer(){
    return (
        <>
            <div id="footer-logo">
                <a href="https://miiree12lb.site/" target="_blank" rel="noopener noreferrer">
                    <img alt="logo" src={logo} id="footer-logo-image" />
                </a>
            </div>
            <div id="footer-icons-text">
                <div id="footer-icons">
                    <a href="https://linktr.ee/miiree12lb" target="_blank" rel="noopener noreferrer"><img alt="Linktree" src={linktree} width="50" height="50" /></a>
                    <a href="https://www.instagram.com/miiree12lb/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src={instagram} width="50" height="50" /></a>
                    <a href="https://www.linkedin.com/in/mireia-lopez-bruch-0b7768241/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={linkedin} width="50" height="50" /></a>
                </div>
                <div id="footer-text">
                    © Mireia Lopez Bruch - 2024-2026 · <Link to="/privacy" className="footer-privacy-link">Privacy</Link>
                </div>
            </div>
        </>
    );
}
