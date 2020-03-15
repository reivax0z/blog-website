import React from 'react';
import Link from 'next/link';

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
                            {link.href ? <Link href={link.href} passHref><a>{link.name}</a></Link> : link.name}
                        </li>
                    ))}
                </ol>
            </nav>
    )}
}