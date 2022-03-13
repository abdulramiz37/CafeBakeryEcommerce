import React, {Component} from 'react';

class CardComp extends Component{
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-header">
                        <img src={this.props.img}></img>
                        </div>
                        <div className="card-body">
                            <h2>{this.props.name}</h2>
                            <p>loremhwdfjihwdjkd</p>

                            <button className='btn btn-outline-primary'>{this.props.name}</button>
                            </div>


                </div>
        -
            </div>
        )
    }
}
export default CardComp;