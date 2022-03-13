import React, {Component} from 'react';

class Server extends Component {
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                        <div className='card-header bg-warning test-white'>
                            <h2> Client Component</h2></div>
                        <div className='card-body'>
                            <div>
                                <input type="text" placeholder='server Msg'/>
                                </div>
                                <button className='btn btn-info'>Export</button>
                                </div>
                        <div className='card-footer'>
                            <p> </p></div>

                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Server; 