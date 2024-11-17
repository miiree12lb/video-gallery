import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
// @ts-ignore
import './css/root.css';
import Footer from "./Footer.jsx";

function Root() {
    return (
        <BrowserRouter>
            <div id="view">
                <h1>Video Gallery</h1>
            </div>
            
            <div id="footer">
                <Footer />
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}
