import React from 'react'
import AppNav from '../components/Navbars/AppNav'
import Sidebar from '../components/Sidebars/Sidebar'
import { Route, Switch } from "react-router-dom";

import routes from "../routes";

function MainLayout(props) {
    return (
        <div id="wrapper">
            <AppNav/>
            <div id="left-sidebar" class="sidebar">
                <Sidebar   {...props}
          routes={routes} />
            </div>
            <div id="main-content">
                <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
            </div>
        </div>
    )
}

export default MainLayout
