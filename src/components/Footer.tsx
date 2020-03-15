import React from 'react';

export default class Footer extends React.Component {  
    render() {
        return (
            <div className='footer text-center'>
                <style jsx>{`
                    .footer {
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                `}</style>
                <hr />
                <p>© Xavier Caron | 2020</p>
                <p>Design adapted from <a href="https://getbootstrap.com/">bootstrap</a> | Pictures sourced from <a href="https://unsplash.com">unsplash</a></p>
            </div>
    )}
}