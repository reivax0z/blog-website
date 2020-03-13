import React from 'react';

export default class Breadcrumb extends React.Component<{ links: { href?: string; name: string; }[] }> {  
    render() {
        return (
            <nav aria-label="breadcrumb">
                <style jsx>{`
                    .breadcrumb {
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                `}</style>
                <ol className="breadcrumb">
                    {this.props.links.map((link: { href?: string; name: string }, index) => (
                        <li key={index} className="breadcrumb-item">
                            {link.href ? <a href={link.href}>{link.name}</a> : link.name}
                        </li>
                    ))}
                </ol>
            </nav>
    )}
}