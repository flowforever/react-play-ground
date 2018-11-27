import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
import {SideBarMenu} from "./SideBarMenu";
import menusConfig from '../../configs/menusConfig';

import('antd/dist/antd.css');

const {Sider, Footer} = Layout;

export class CommonLayout extends PureComponent {

    static propTypes = {
        onNavigate: PropTypes.func.isRequired,
    };

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => this.setState({collapsed});

    render() {
        const {children, onNavigate} = this.props;

        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo"/>
                    <SideBarMenu
                        menus={menusConfig.mainMenu}
                        activeUrl={'/'}
                        onItemClick={onNavigate}
                    />
                </Sider>
                <Layout>
                    {children}
                    <Footer style={{textAlign: 'center'}}>
                        Ant
                        Design ©2018
                        Created
                        by
                        Ant
                        UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}