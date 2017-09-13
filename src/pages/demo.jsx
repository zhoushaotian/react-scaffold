import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentList } from '../actions';
class Demo extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.dispatch(fetchCurrentList());
    }
    render() {
        const { list } = this.props;
        return (
            <div>
                <h1>{list.toString()}</h1>
            </div>
        );
    }
}
Demo.propTypes = {
    list: propTypes.array,
    dispatch: propTypes.func,
    getState: propTypes.func
};
function select(state) {
    return Object.assign({}, state);
}
export default connect(select)(Demo);