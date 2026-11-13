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

// Same footer as miiree12lb.site
export default function Footer() {
    return (
        <footer id="footer">
            <a href="https://miiree12lb.site/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio (opens in a new tab)">
                <img alt="" src={logo} id="footer-logo-image" width="44" height="44" />
            </a>
            <nav className="footer-social" aria-label="Elsewhere">
                <div id="footer-icons">
                    <a href="https://linktr.ee/miiree12lb" target="_blank" rel="noopener noreferrer"><img alt="Linktree" src={linktree} width="22" height="22" /></a>
                    <a href="https://www.instagram.com/miiree12lb/" target="_blank" rel="noopener noreferrer"><img alt="Instagram" src={instagram} width="22" height="22" /></a>
                    <a href="https://www.linkedin.com/in/mireia-lopez-bruch-0b7768241/" target="_blank" rel="noopener noreferrer"><img alt="LinkedIn" src={linkedin} width="22" height="22" /></a>
                </div>
            </nav>
            <div id="footer-text">
                © Mireia Lopez Bruch 2024–2026 · <Link to="/privacy" className="footer-privacy-link">Privacy</Link>
            </div>
        </footer>
    );
}
