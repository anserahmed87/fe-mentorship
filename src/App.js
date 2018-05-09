import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {Content, Footer, Header, Page, PageNewsList} from './components';
import {NewsItem} from "./components/newsitem";

class App extends Component {
    render() {
        return (
            <Router>
                <Page>
                    <div>
                        <Header/>
                        <Content>
                            <Switch>
                                <Route exact path="/" component={PageNewsList}/>
                                <Route
                                    path="/item/:itemId"
                                    render={(props) => (<NewsItem id={props.match.params.itemId}/>)}/>
                            </Switch>
                        </Content>
                    </div>
                    <Footer/>
                </Page>
            </Router>
        );
    }
}
export default App;
