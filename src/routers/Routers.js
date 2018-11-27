import React from "react";
import {Route, Switch} from "react-router-dom";
import {createLoadable} from "../components/shares/Loadable";

const CommonLayout = createLoadable(() => import('../components/shares/CommonLayout').then(m => m.CommonLayout));
const Home = createLoadable(() => import('../components/homePage/HomePage').then(m => m.HomePage));

const RefTest = createLoadable(()=> import('../components/refTestPage/RefTestPage').then(m => m.RefTestPage));

export function Routers({onNavigate}) {
    return (
        <CommonLayout onNavigate={onNavigate}>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={Home}
                />
                <Route path="/refTest" component={RefTest}/>
            </Switch>
        </CommonLayout>
    );
}