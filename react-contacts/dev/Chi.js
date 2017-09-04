import React, {Component} from 'react';
require( '../css/index.css');

class Chi extends Component {
    constructor(props) {
        super(props);
    };
    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps);
        console.log('componentWillReceiveProps');
    };
    render() {
        return (
            <div  className="a">
                子类
                <span>{this.props.name}</span>
                <p onClick={this.props.a}>dkjasd</p>
            </div>
        )
    };
}
export default Chi;