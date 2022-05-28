import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

function Example() {
    return (
        <div>
            <Header />
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
