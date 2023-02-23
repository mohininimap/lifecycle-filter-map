import React from "react"
class Constructorexample extends React.Component{
    constructor(){
        super(); //must call super constructor if not give
       
        console.warn("constructor call")

        this.state={
            name:"mohini"
        }
    }
    componentDidMount(){
        console.log("Component Did Mount")
    }
    componentDidUpdate(){
        console.log("Component Did Update")
    }
render(){
    console.warn("render call")
    return(
        <>
       <h1>Name : {this.state.name}</h1>
       <button onClick={()=>this.setState({name:"Bhargavi"})}>Update Name</button>
        </>
    )
}
}

export default Constructorexample;