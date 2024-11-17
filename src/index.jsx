import React from "react";
import { createRoot } from "react-dom/client";
// @ts-ignore
import './css/root.css';

function Root() {
    return (
        <>
            <h1>Video Gallery</h1>
        </>
    )
}

const rootElement = document.getElementById("root");
if (rootElement) {
    createRoot(rootElement).render(<Root />);
}