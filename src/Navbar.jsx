import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// @ts-ignore
import './css/navbar.css';
// @ts-ignore
import logo from "./assets/images/logo.png";

function Nabvar({ categories, selectedCategory, setSelectedCategory, setSearchQuery }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const [isOpen, setIsOpen] = useState(false);
    const [showLeftNav, setShowLeftNav] = useState(true);
    const [showSearchBar, setShowSearchBar] = useState(true);
    const searchBarRef = useRef(null); 
    const dropdownRef = useRef(null);

    useEffect(() => {
        setShowSearchBar(isDesktop);
    }, [isDesktop]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
                if (!isDesktop) {
                    setShowSearchBar(false);
                    setShowLeftNav(true);
                }
            }

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDesktop]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleIcon = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleShowSearchBar = () => {
        if (isDesktop) return;

        setShowLeftNav(!showLeftNav);
        setShowSearchBar(!showSearchBar);
    };

    return (
        <div className="nav-bar">
            {showLeftNav && (
                <div className="nav-bar-left">
                    <div className="chip">
                        <Link to="https://miiree12lb.site/">
                            <img src={logo} alt="logo" width="50" height="50" />
                        </Link>
                        Video Gallery
                    </div>

                    <div className="dropdown" ref={dropdownRef}>
                        <button id="category" onClick={toggleIcon} style={{
                            borderBottom: selectedCategory !== "All" ? "solid 1px #94692D" : "none"
                        }}>
                            <span>{selectedCategory === 'All' ? "Categories" : selectedCategory}</span>
                            <svg id="caret" className="icon" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
                                <path d={isOpen ? "M1 7h8L5 2z" : "M1 3h8L5 8z"} fill="currentColor" />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="dropdown-content">
                                <div className="radio-buttons">
                                    {categories.map((category, index) => (
                                        <label key={index} className="custom-radio">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={category}
                                                checked={selectedCategory === category}
                                                onChange={handleCategoryChange}
                                            />
                                            <span>{category}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="nav-bar-right" ref={searchBarRef}>
                {showSearchBar && (
                    <input
                        type="text"
                        placeholder="Search by (sub)title..."
                        onChange={handleSearch}
                    />
                )}

                <button className={`search-button${showSearchBar ? "" : "-big"}`} onClick={handleShowSearchBar} aria-label="Search">
                    <svg id={`search${showSearchBar ? "" : "-big"}`} className="icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                        <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
                        <line x1="10.3" y1="10.3" x2="15" y2="15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Nabvar;
