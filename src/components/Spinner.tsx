import React from 'react';
import Header from './Header';

export default class Spinner extends React.Component {  
    render() {
        return (
            <div className="container">
                <Header />
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}