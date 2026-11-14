import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// @ts-ignore
import './css/navbar.css';
// @ts-ignore
import avatar from "./assets/images/avatar.jpg";
import ThemeSwitch from "./ThemeSwitch.jsx";

function SearchIcon() {
    return (
        <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <circle cx="6.5" cy="6.5" r="5" fill="none" stroke="currentColor" strokeWidth="2" />
            <line x1="10.3" y1="10.3" x2="15" y2="15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg className="icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
    );
}

function Navbar({ categories, selectedCategory, setSelectedCategory, searchQuery, setSearchQuery, showFilters, theme, toggleTheme }) {
    const isDesktop = useMediaQuery({ query: "(min-width: 801px)" });
    const [isOpen, setIsOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const searchRef = useRef(null);
    const searchInputRef = useRef(null);
    const dropdownRef = useRef(null);

    // On phones the search box collapses to an icon
    const showSearchBar = isDesktop || searchOpen;
    const showLeft = isDesktop || !searchOpen;

    useEffect(() => {
        if (isDesktop) setSearchOpen(false);
    }, [isDesktop]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target) && !searchQuery) {
                setSearchOpen(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        const handleKey = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKey);
        };
    }, [searchQuery]);

    useEffect(() => {
        if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
    }, [searchOpen]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setIsOpen(false);
    };

    const handleSearchButton = () => {
        if (isDesktop) {
            if (searchInputRef.current) searchInputRef.current.focus();
            return;
        }
        if (searchOpen) {
            // On phones the button closes the search box and clears the search
            setSearchQuery("");
            setSearchOpen(false);
        } else {
            setSearchOpen(true);
        }
    };

    const closeOnPhone = !isDesktop && searchOpen;

    return (
        <div id="nav-container">
            <nav id="nav" aria-label="Main">
                {showLeft && (
                    <div className="nav-left">
                        <Link to="/" className="nav-brand" aria-label="Video Gallery, home">
                            <img src={avatar} alt="" width="40" height="40" />
                            <span className="nav-brand-text">
                                <strong>Video Gallery</strong>
                                <small>Mireia Lopez Bruch</small>
                            </span>
                        </Link>

                        {showFilters && (
                            <div className="dropdown" ref={dropdownRef}>
                                <button
                                    type="button"
                                    id="category"
                                    className={selectedCategory !== "All" ? "filtered" : ""}
                                    onClick={() => setIsOpen(!isOpen)}
                                    aria-expanded={isOpen}
                                    aria-haspopup="true"
                                >
                                    <span>{selectedCategory === "All" ? "Categories" : selectedCategory}</span>
                                    <svg className="icon" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
                                        <path d={isOpen ? "M1 7h8L5 2z" : "M1 3h8L5 8z"} fill="currentColor" />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="dropdown-content">
                                        <div className="radio-buttons" role="radiogroup" aria-label="Category">
                                            {categories.map((category) => (
                                                <label key={category} className="custom-radio">
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
                        )}
                    </div>
                )}

                <div className="nav-right">
                    {showFilters && (
                        <div className={`nav-search${searchOpen ? " expanded" : ""}`} ref={searchRef} role="search">
                            {showSearchBar && (
                                <input
                                    ref={searchInputRef}
                                    className="search-input"
                                    type="search"
                                    placeholder={isDesktop ? "Search by (sub)title..." : "Search videos"}
                                    aria-label="Search videos by title or subtitle"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                />
                            )}
                            <button
                                type="button"
                                className={showSearchBar ? "search-button" : "search-button search-button-big"}
                                onClick={handleSearchButton}
                                aria-label={closeOnPhone ? "Close search" : "Search"}
                            >
                                {closeOnPhone ? <CloseIcon /> : <SearchIcon />}
                            </button>
                        </div>
                    )}

                    {showLeft && (
                        <a className="nav-link" href="https://miiree12lb.site/" target="_blank" rel="noopener noreferrer">
                            Portfolio ↗
                        </a>
                    )}

                    <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
