/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

export function Header() {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header>
            <a href="/" className="brand">
                NavBar
            </a>
            <div
                role="none"
                className="menu-btn"
                onClick={() => setOpen(!open)}
            >
                <span
                    className={`menu-btn__burger ${open ? 'open' : ''}`}
                ></span>
            </div>
            <nav className={`nav ${open ? 'open' : ''}`}>
                <ul className={`menu-nav ${open ? 'open' : ''}`}>
                    <li className={`menu-nav__item ${open ? 'open' : ''}`}>
                        <a href="#" className="menu-nav__link">
                            Link 1
                        </a>
                    </li>
                    <li className={`menu-nav__item ${open ? 'open' : ''}`}>
                        <a href="#" className="menu-nav__link">
                            Link 2
                        </a>
                    </li>
                    <li className={`menu-nav__item ${open ? 'open' : ''}`}>
                        <a href="#" className="menu-nav__link">
                            Link 3
                        </a>
                    </li>
                    <li className={`menu-nav__item ${open ? 'open' : ''}`}>
                        <a href="#" className="menu-nav__link">
                            Link 4
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-container__card">
                    <h4>Made by QuanMuiTo</h4>
                    <div className="d-flex justify-content-center">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.facebook.com/quanmuito/"
                        >
                            Facebook
                        </a>
                        |{' '}
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/Quanmuito/ihvoidarkcalculator"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
