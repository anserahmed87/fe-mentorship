import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import {Page, Header, Footer, Content,NewsItem} from './components';

class App extends Component {
    render() {
        return (
            <Router>
            <Page>
                <div>
                    <Header/>
                    <Content>
                        This is content
                    </Content>
                    <NewsItem id={16983195}/>
                </div>
                <Footer/>
            </Page>
            </Router>
        );
    }
}

export default App;
