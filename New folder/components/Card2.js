import React, {Component} from 'react';

class CardComp extends Component{
    render(){
        return(
            <div>
                <div className="card">
                    <div className="card-header">
                        <img src="https://images.pexels.com/photos/4788106/pexels-photo-4788106.jpeg?cs=srgb&dl=pexels-cottonbro-4788106.jpg&fm=jpg" className="img-fluid"></img>
                        </div>
                        <div className="card-body">
                            <h2>geekster</h2>
                            <p>loremhwdfjihwdjkd</p>

                            <button className='btn btn-outline-primary'>Profile</button>
                            </div>


                </div>
        
            </div>
        )
    }
}
export default CardComp;