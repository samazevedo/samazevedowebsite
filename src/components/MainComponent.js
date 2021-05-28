import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './pages/HomeComponent';
import Portfolio from './pages/PortfolioComponent';
import Skills from './pages/SkillsComponent';
import About from './pages/AboutComponent';
import Contact from './pages/ContactComponent';



class Main extends Component {
    render() {

        return (
            <React.Fragment>
                <div className="MainPage">
                    <Header />
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/skills" component={Skills} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contact" component={Contact} />
                        <Redirect to="/home" />
                    </Switch>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Main;