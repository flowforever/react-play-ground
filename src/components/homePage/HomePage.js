import React, {Component, Fragment} from "react";
import {Breadcrumb, Layout} from "antd";

const {Header, Content} = Layout;

export class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <Header style={{background: '#fff', padding: 0}}/>,
                <Content style={{margin: '0 16px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        Bill is a cat.
                    </div>
                </Content>
            </Fragment>
        );
    }
}