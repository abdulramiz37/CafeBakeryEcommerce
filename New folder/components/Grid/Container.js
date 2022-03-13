import React, {Component} from "react";

class Container extends Component {
    render(){
        return(
        <>
        <div className="container bg-success mt-5  p-5">
            <div className="row bg-primary">Row1</div>
            <div className="row bg-dark">Row2</div>
            </div>

            <div className="container bg-success mt-5 ">
            <div className="row bg-primary">

            <div className="col bg-warning">Col 1 </div>
            <div className="col bg-info"> </div> 
            <div className="col">Col 1 </div>
            <div className="col">Col 1 </div> 
            <div className="col">Col 1 </div>
            <div className="col">Col 1 </div> 
            <div className="col">Col 1 </div>
            <div className="col">Col 1 </div> 
            <div className="col">Col 1 </div>
            <div className="col">Col 1 </div> 
            <div className="col">Col 1 </div>
            <div className="col">Col 1 </div> 
   
 
                </div>
            <div className="row bg-dark">Row2</div>
        
        </div>

        <div className="container bg-primary mt-5 p-4">
            <div className="row">
                <div className="col-6 bg-dark">col1</div>
                <div className="col-6 bg-warning">col2</div>

                </div>

                <div className="row mt-2">
           
                <div className="col-4 bg-dark">col1</div>
                <div className="col-4 bg-warning">col2</div>
                <div className="col-4 bg-warning">col3</div>

                </div>
                
            </div>
           </>
        );
    }
}
export default Container;