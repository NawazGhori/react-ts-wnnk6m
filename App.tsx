import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
interface AppProps { }
interface AppState {
  my_fun:any;
  response:any;
}

class App extends Component<AppProps, AppState> {
  
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.my_fun();
  }

  render() {
    return (
      <div>
        
        <p>
           {JSON.stringify(this.props.response)}
        </p>
      </div>
    );
  }

  
}
const receive = (state)=>{
  return{
    response: state
  }
}
const send = (dispatch)=>{
  return{
    my_fun: ()=>{dispatch({type:"COUNTRIES",value:{}})}
  }
}
export default connect(receive,send)(App);