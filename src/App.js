import React, {Component} from 'react';

import {Page, Header, Footer} from './components';

class App extends Component {
    render() {
        return (

            <Page>
                <Header/>
                Page will be here
                <Footer/>
            </Page>
        );
    }
}

export default App;
