import React, {Component} from 'react';
// import CardComp from './CardComponenent';
class Child extends Component { 
    render(){
        return(
            <div className='container mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-primary text-white'>
                                <h2>Parent Component</h2></div>

                            <div className='card-body'>
                                <p className='lead'>{this.props.name }</p>
                                <p className='lead'>{this.props.c}</p>
                                </div>
                            <div className='card-footer'>
                                <button className='btn btn-secondary'>Send To PArent</button></div>


                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

export default Child; 