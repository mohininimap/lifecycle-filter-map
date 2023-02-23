import React from "react";
class ComponentShouldUpdateEx extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        console.log("constructor")
    }

    shouldComponentUpdate(){
        console.log("Component Should Mount")
    //  return false;
    return true;
    }
    componentDidMount(){
        console.log("Component Did Mount")

    }
    componentDidUpdate(){
        console.log("Component Did Update")

    }

    ComponentShouldUpdateEx 
    render(){
        console.log("render ")
return(
<>
<p>Count is : {this.state.count}</p>
<button onClick={()=>{this.setState({count:1})}}>Update Count</button>
</>
)
    }
}

export default ComponentShouldUpdateEx;