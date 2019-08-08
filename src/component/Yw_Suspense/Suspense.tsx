import React from "react";
import { Suspense, Component } from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "../../config/router";
import { Spin } from "antd";

export default class YwSuspense extends Component<{}, ContentState>{

    render() {
        return (
            /**
             * 路由组件封装
             * 
            */
            <Suspense fallback={<Spin />}>
                <Switch>
                    {
                        routes.map(item => {
                            return (
                                <Route key={item.path} exact path={item.path} component={item.component} />
                            )
                        })
                    }
                </Switch>
            </Suspense>
        )
    }


}
interface ContentState {

}