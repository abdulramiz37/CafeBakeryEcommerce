import React, {Component} from 'react';
import Client from '../Client/Client';
import Server2 from '../Server2/Server2';


class Home extends Component {
    constructor(props){
        super(props);
            this.state={
                clientData:"SBKJDHDSJ",
                serverData:"",
            }
        }
    updateClientData = (data) =>{
        this.setState({
            clientData:data,
        })

    }
    updateServerData = (data1) =>{
        this.setState({
            serverData:data1,
        })

    }



    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Client updateClientData={this.updateClientData}  serverData={this.state.serverData}/></div>
                    <div className='col-6'>
                    <Server2 clientData={this.state.clientData} updateServerData={this.updateServerData}/></div>
                   

                    </div>

            </div>
        )
    }
}

export default Home; 