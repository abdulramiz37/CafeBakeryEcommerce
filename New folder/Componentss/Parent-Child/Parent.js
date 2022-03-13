import React, {Component} from 'react';
// import CardComp from './CardComponenent';
import Child from './Child';
class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"hsjjkhd",
            c:"kjcsalaj"
        }

    }
    sendDataToChild = () =>{
        this.setState({
            name:"Geekster",
            c:"delshi",
        })
    }

    render(){
        return(
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-secondary text-ehite'>
                                <h2>Parent Component</h2></div>

                            <div className='card-body'>
                                <Child name={this.state.name} c={this.state.c  }/></div>
                            <div className='card-footer'>
                                <button onClick={this.sendDataToChild} className='btn btn-primary'>SEND TO CHILD</button></div>


                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}
 
export default Parent; 