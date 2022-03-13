import React, {Component} from 'react';

class Server2 extends Component {
    constructor(props){
        super(props);
        this.serverData = React.createRef()
        // this.h2Ref = React.createRef()
    }
    getServerData = () =>{
        // alert(this.serverData.current.value)
        // this.h2Ref.current.innerText ="Client Com Changed";
        this.props.updateServerData(this.serverData.current.value)
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                        <div className='card-header bg-warning test-white'>
                            <h2> Server Component</h2></div>
                        <div className='card-body'>
                            <div>
                                <input ref={this.serverData}
                                type="text" placeholder='server Msg'/>
                                </div>
                                <button onClick={this.getServerData} className='btn btn-info'>Export</button>
                                </div>
                        <div className='card-footer'>
                            <p>{this.props.clientData} </p></div>

                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Server2; 