var Hello=React.createClass({
	 getInitialState:function(){
		 alert('InitialState');
		return  {opacity:1.0,
		  fontSize:'20px',
		 };
	 },
   render:function(){
	    var styleObj={
			color:'red',
			fontSize:'30px',
		}
     return <div className="ab" /* style={styleObj} */ /* style={this.state} */ style={{opacity:this.state.opacity,fontSize:this.state.fontSize}}>Hello {this.props.title} {this.props.name}</div>;
   },
   componentWillMount:function(){
	   alert('will');
   },
   componentDidMount:function(){
	   alert('Did');
	  /*  var _self=this;
	   window.setTimeout(function(){
		   _self.setState({//重新设置state
			   opacity:0.5,
			   fontSize:'40px',
		   })
	   },1000); */
	   window.setTimeout(function(){
		   this.setState({//重新设置state
			   opacity:0.5,
			   fontSize:'40px',
		   })
	   }.bind(this),1000); 
	   
   },
   
   
});
ReactDOM.render(<Hello name="Morld"  title="MR"/>,
            document.getElementById('root');
			)
			document.getElementById('root').style.paddingLeft='100px';