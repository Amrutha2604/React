import React from 'react';
function Employee(props){
    return(<div> 
        <h1>Hello,{props.name}</h1>
        <h1>Your Emp ID: {props.empid}</h1>
    </div> )
}
class Employee extends React.Component{
    render(){
        return(<div>
             <h1>Hello,{this.props.name}</h1>
             <h1>Your Emp ID: {this.props.empid}</h1>
        </div>)
    }
}