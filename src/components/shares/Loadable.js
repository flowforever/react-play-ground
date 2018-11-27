import React, {Component} from "react";
import PropTypes from 'prop-types';

export class Loadable extends Component {
    static propTypes = {
        loader: PropTypes.func.isRequired,
        LoadingComponent: PropTypes.any,
    };

    static defaultProps = {
        LoadingComponent: () => <div>Loading</div>
    };

    state = {
        Component: false
    };

    static create = (loader) => function $$createLoadableWrapper(props) {
        return <Loadable {...props} loader={loader} />;
    };

    componentDidMount() {
        this.loadComponent();
    }

    loadComponent() {
        this.props.loader()
            .then(Component => this.setState({Component}));
    }

    render() {
        const {LoadingComponent, loader, ...props} = this.props;
        const {Component} = this.state;

        return Component ? <Component {...props}/> : <LoadingComponent/>;
    }
}

export function createLoadable(loader) {
    return Loadable.create(loader);
}