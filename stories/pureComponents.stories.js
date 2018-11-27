import React from 'react';
import PropTypes from 'prop-types';
import {createAddStory} from "./helper";

const addStory = createAddStory('PureComponent');

class PureComponentWrapper extends React.PureComponent {

    static propTypes = {
        useNativeDiv: PropTypes.bool
    };

    state = {counter: 1};

    onClick = () => this.setState({counter: this.state.counter + 1});

    render() {
        const {counter} = this.state;

        return (
            <div>
                <div onClick={this.onClick} style={{padding: 20, background: 'red'}}>
                    Click Me to change the counter inside state
                </div>
                <br/>

                <Div text="I should not being reRendered">
                    Simple Div Content
                </Div>

                <br/>
                <Div text="I might be rendered">
                    <div>A native div Component</div>
                </Div>
                <br/>
                <FunctionDiv>
                    I am simple FunctionDiv
                </FunctionDiv>
            </div>
        );
    }
}

function FunctionDiv({text, children}) {
    console.log('render', 'FunctionDiv', text);

    return (
        <div>
            {children}
        </div>
    );
}

class Div extends React.PureComponent {
    render() {
        console.log('render', 'Div', this.props.text);

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

addStory('native div children', () => <PureComponentWrapper/>);
addStory('Div PureComponent children', () => <PureComponentWrapper/>);

