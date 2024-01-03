import React from 'react';
import logo from './logo.svg';
import './App.css';

class FirstComponent extends React.Component
{
  render(){
    return(
      <div className="App">
        <h1>Component1</h1>
      </div>

    )
  }
}
class SecondComponent extends React.Component
{
  render(){
    return(
      <div className="App">
        <h1>Component2</h1>
      </div>

    )
  }
}
function Third(){
  return(
    <h1>Function Component</h1>

  )
}

function App() {
  return (
    <div className="App">
      <h1>
        Parent Component
      </h1>
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <Third></Third>
      
    </div>
  );
}

export default App;
