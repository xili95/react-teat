import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Chi from './Chi';
require('../css/index.css') ;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'ABC',
        }
    };

    componentWillMount = () => {
        console.log('componentWillMount组件将要被渲染');
    };
    componentDidMount = () => {
        console.log('componentDidMount组件渲染完成');
    };
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log(nextState);
        console.log('shouldComponentUpdate');
        //return false;//不允许渲染
        return true;
    };
    componentWillUpdate = () => {
        console.log('componentWillUpdate 组件将要被更新');
    };
    componentDidUpdate = () => {
        console.log('componentDidUpdate 组件更新完毕');
    };
    clickEvent = () => {
        this.setState({
            name: 'ZXC',
        })
    };
    componentWillUnmount = () => {//销毁之前调用
        console.log('组件将要被销毁');
    };
    killEvent = () => {//销毁组件
        //ReactDOM.unmountComponentAtNode(document.getElementById('container'));
    };
    a = () =>{
        alert(0)
    }
    render() {
        console.log('渲染');
       var  style={
            background:'green',
                fontSize:'20px',
        };
        return (
            <div>
                父类
                <h1 style={style}>{this.state.name}</h1>
                <button   onClick={this.clickEvent}> 点击改变name</button>
                <Chi name={this.state.name} a={this.a}/>
                <button onClick={this.killEvent}>销毁组件</button>
            </div>
        )
    };

}
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />, app);
