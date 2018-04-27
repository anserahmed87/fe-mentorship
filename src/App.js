import React, {Component} from 'react';

import {Page, Header, Footer, Content} from './components';

class App extends Component {
    render() {
        return (
            <Page>
                <div>
                    <Header/>
                    <Content/>
                </div>
                <Footer/>
            </Page>
        );
    }
}

export default App;
