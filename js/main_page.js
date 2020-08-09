import React from 'react';
import '../css/basic.css';
import '../css/main_page.css';

export class MainPage extends React.Component {
    Header = () => {
        return <header className={'header'}></header>;
    }

    Main = () => {
        return <main className={'main'}></main>;
    }

    Footer = () => {
        return <footer className={'footer'}></footer>
    }

    render() {
        return (
            <div>
                {this.Header()}
                {this.Main()}
                {this.Footer()}
            </div>
            );
    }
}