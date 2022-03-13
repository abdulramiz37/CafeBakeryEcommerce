import React, {Component} from 'react';
// import CardComp from './CardComponenent';
class B extends Component { 
    constructor(props){
        super(props);
        this.state= {
            brandName:"Apple",
            modelname:"Iphone 13 pro"
        }
    }
    sendData = () =>{
        this.props.updateState(this.state.brandName,this.state.modelname);
    }
    render(){
        return(
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-warning text-white'>
                                <h2>B Component</h2></div>

                            <div className='card-body'>
                              <button className='btn btn-primary'onClick={this.sendData}>Send Data to Parent</button>
                                </div>
                            <div className='card-footer'>
                                </div>


                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default B; 