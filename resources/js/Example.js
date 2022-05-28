import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';

function Example() {
    return (
        <div>
            <Header />
            <div className='nav'>
                <div>ホーム</div>
                <div></div>
                <div></div>
                <div>アカウント</div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
