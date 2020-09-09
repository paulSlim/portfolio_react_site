import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Pages.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import StartPage from '../pages/StartPage';
import WebsitesPage from '../pages/WebsitesPage';
import TextsPage from '../pages/TextsPage';

const Pages = () => {
    return (
        <Route render={({ location }) => (
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={3000} classNames='slide'>
                    <Switch location={location}>
                        <Route path='/' exact component={StartPage} />
                        <Route path='/websites' component={WebsitesPage} />
                        <Route path='/texts' component={TextsPage} />
                        <Route component={StartPage} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup >
        )} />
    )
}

export default Pages;