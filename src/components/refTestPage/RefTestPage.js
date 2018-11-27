import React, {Fragment, PureComponent} from "react";
import {Layout} from "antd";

const {Header, Content} = Layout;

class Wrapper1 extends PureComponent {
    render() {
        const {children: renderChildren} = this.props;
        return (
            <li>
                {renderChildren()}
            </li>
        )
    }
}

export class RefTestPage extends PureComponent {

    $createdRef = React.createRef();

    render() {
        return (
            <Fragment>
                <Header style={{background: '#fff'}}>
                    <h1>Ref Test</h1>
                </Header>,
                <Content style={{margin: '0 16px'}}>
                    <h2>String ref</h2>
                    <ul>
                        <Wrapper1>
                            {() => <div ref="item0">Item 0</div>}
                        </Wrapper1>
                    </ul>

                    <h2>createRef</h2>
                    <ul>

                        <Wrapper1>
                            {() => (
                                <div ref={this.$createdRef}>
                                    Item with createRef
                                </div>
                            )}
                        </Wrapper1>
                    </ul>
                </Content>
            </Fragment>
        );
    }
}