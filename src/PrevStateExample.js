import React,{Component} from "react";
class PrevStateExample extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    componentDidUpdate(preProps,preState,snapshot){
        // console.log("prevstate",preState)
console.log("snapshot is    "+snapshot)
        //Without giving condition ,if we update in componentDimount it goes infinite loop

        if(this.state.count<10){
            this.setState({count:this.state.count+1})
        }
        
    }
render(){
    console.log("render")
    return(
        <>
        <h1>Number:{this.state.count}</h1>
        <button onClick={()=>{this.setState({count:1})}}>Update Name</button>
        </>
    )
}
}

export default PrevStateExample;