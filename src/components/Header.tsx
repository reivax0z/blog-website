import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component {  
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Xavier Blog</span>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/travels/">
                            <a className="nav-link">Travels</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog/">
                            <a className="nav-link">Blog Posts</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )}
}