import React, { Component } from "react";

export default class LifeCycle extends Component {
	constructor(props) {
    console.log('====> constructor');
		super(props);
		this.state = {
			message: "Hello World",
		};
	}

  // static getDerivedStateFromProps(props,state) {
  //   console.log('====> getDerivedStateFromProps');
  //   console.log(props,state);
  //   return {message: props.msg};
  // }

  componentDidMount() {
    console.log('====> componentDidMount');
  }

  changeMessage = () => {
    console.log('changeMessage');
    this.setState({message: "Welcome to World"});
  }
  
  shouldComponentUpdate() {
    console.log('====> shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('====> getSnapshotBeforeUpdate');
    console.log(prevProps,prevState)
  }
  componentDidUpdate() {
    console.log('====> componentDidUpdate');
  }
  

	render() {
    console.log('====> render');
    console.log(this.state);
		return <>
      <h1>ClassComponent</h1>
      <h5>{this.state.message}</h5>
      <button onClick={this.changeMessage}>change message</button>
    </>;
	}
}
