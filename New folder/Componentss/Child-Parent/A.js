import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React, {Component} from 'react';
// import CardComp from './CardComponenent';
// import Child from './Child';
import B from './B';
class A extends Component {
    constructor(props){
        super(props);
        this.state={
            brandName:"ramiz",
            brandModel:"kxnxk"
        }

    }
    updateState =(name,model) => {
        this.setState({
            brandName:name,
            brandModel:model,  
        })
    }
  
    render(){
        return(  
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-secondary text-ehite'>
                                <h2>A Component</h2></div>

                            <div className='card-body'>
                                 <B updateState={this.updateState}/> 
                                 </div>
                            <div className='card-footer'>
                                <p className='lead'>{this.state.brandName}</p>
                                <p className='lead'>{this.state.brandModel}</p>
                              </div>


                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}
 
export default A; 