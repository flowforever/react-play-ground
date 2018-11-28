import React, {PureComponent} from 'react';

const wrapperStyles = {
    padding: 10,
    background: '#fff',
    border: '1px solid gray',
    boxShadow: '1px 3px 3px gray'
};

export class StoryWrapper extends PureComponent {
    render() {
        return (
            <div style={wrapperStyles}>
                {this.props.children}
            </div>
        );
    }
}