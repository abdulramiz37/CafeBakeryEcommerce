import React, {Component} from 'react';
// import CardComp from './CardComponenent';
class Client extends Component {
    constructor(props){
        super(props);
        this.clentRef = React.createRef()
        this.h2Ref = React.createRef()

    }
    getClientData = () =>{
        // alert(this.clentRef.current.value)
        // this.h2Ref.current.innerText ="Client Com Changed";
        this.props.updateClientData(this.clentRef.current.value)
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                        <div className='card-header bg-warning test-white'>
                            <h2 ref={this.h2Ref}> Client Component</h2></div>
                        <div className='card-body'>
                            <div>
                                <input 
                                ref={this.clentRef}
                                type="text" placeholder='Clien Msg'/>
                                </div>
                                 <button className='btn btn-warning' onClick={this.getClientData}>Import</button>
                                </div>
                        <div className='card-footer'>
                        <p>{this.props.serverData} </p></div>

                        </div>
                        </div> 
                    </div>
                </div>
        )
    }
}

export default Client; 