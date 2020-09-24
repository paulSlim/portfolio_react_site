import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Pages.css';
import { CSSTransition } from 'react-transition-group';

import StartPage from '../pages/StartPage';
import WebsitesPage from '../pages/WebsitesPage';
import TextsPage from '../pages/TextsPage';

const routes = [
    { Component: WebsitesPage, path: '/websites' },
    { Component: TextsPage, path: '/texts' },
    { Component: StartPage, path: '/start' }
];

const routesList = routes.map(({ path, Component }) => (
    <Route key={path} exact path={path}>
        {({ match }) => (
            <CSSTransition
                in={match != null}
                timeout={1000}
                classNames="slide"
                unmountOnExit>
                <Component />
            </CSSTransition>
        )}
    </Route>
));

const Pages = () => {
    return (
        <>
            { routesList}
        </>
    );
}

export default Pages;