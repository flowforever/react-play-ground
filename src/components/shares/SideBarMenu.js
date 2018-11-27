import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Icon, Menu} from "antd";

export class SideBarMenu extends PureComponent {

    static propTypes = {
        activeUrl: PropTypes.string.isRequired,
        menus: PropTypes.array.isRequired,
        onItemClick: PropTypes.func.isRequired,
    };

    render() {
        const {activeUrl, menus, onItemClick} = this.props;

        return (
            <Menu theme="dark" defaultSelectedKeys={[activeUrl]} mode="inline">
                {menus.map(menu => (
                    <Menu.Item key={menu.url}>
                        <Icon type={menu.icon}/>
                        <span onClick={()=> onItemClick(menu.url, menu)}>
                            {menu.text}
                        </span>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}