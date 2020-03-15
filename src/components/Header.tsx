import React from 'react';
import Link from 'next/link';

export default class Header extends React.Component<{ current: string }, { items: { url: string, name: string }[] }> {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                { url: '/', name: 'Home' },
                { url: '/travels/', name: 'Travels' },
                { url: '/blog/', name: 'Tech Blog' },
                { url: '/about/', name: 'About' }
            ]
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Xavier Blog</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {this.state.items.map((item, index) => {
                        if (this.props.current === '/') {
                            return (
                                <li className="nav-item" key={index}>
                                    <Link href={item.url} passHref>
                                        <a className={'nav-link' + (item.url === this.props.current ? ' active': '')}>{item.name}</a>
                                    </Link>
                                </li>
                            )
                        }

                        return (
                            <li className="nav-item" key={index}>
                                <Link href={item.url} passHref>
                                    <a className={'nav-link' + (this.props.current.startsWith(item.url) && item.url !== '/' ? ' active': '')}>{item.name}</a>
                                </Link>
                            </li>
                        )}
                    )}
                </ul>
            </div>
        </nav>
    )}
}