import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from "react-redux";
interface AppProps { }
interface AppState {
  my_fun:any;
  res:any;
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
      <React.Fragment>
        <p>The response is: </p>
        {JSON.stringify(this.props.res)}
      </React.Fragment>      
    );
  }  
}
const receive = (state)=>{
  return{
    res: state
  }
}
const send = (dispatch)=>{
  return{
    my_fun: ()=>{dispatch({type:"COUNTRIES",value:{}})}
  }
}
export default connect(receive,send)(App);