///  29/9/2019
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const AppRoot = document.getElementById('root')
const ModelRoot = document.getElementById('model-root')


class Model extends React.Component{
	constructor(props) {
    super(props);
    	this.el = document.createElement('div');
  	}

  	componentDidMount(){
  		ModelRoot.appendChild(this.el)
  	}

  	componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    	ModelRoot.removeChild(this.el);
  	}

	render(){
		console.log(this.props.children)
		return ReactDOM.createPortal(
			this.props.children,
			this.el
		)
	}
}

class App extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			showModel: false
		}
	}

	handleShow = () => {
		this.setState({
			showModel: true
		})
	}

	handleHide = () => {
		this.setState({
			showModel: false
		})
	}

	render(){
		const model = this.state.showModel ? (
			<Model>
				<div>
					this is from model-root!! 
					<button onClick={this.handleHide}>Hide Button</button>
				</div>
			</Model>
		) : null 

		return(
			<div>
				this is from app root!
				<button onClick={this.handleShow}>Show button</button>
				{model}
			</div>
		)
	}
}

export default App;
