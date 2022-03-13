// import React,{Component} from "react";


// class Mounting extends Component{
//     render(){
//         return(
//             <div>

//             </div>
//         )
//     }
// }
// export default Mounting;

import React,{Component} from "react";



class Mounting extends Component{
    constructor(props){
        super(props);
        // console.log("consytructor is called");
        this.state={
            name:"geekster",
        }
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps is called");
        return(null)
    }
    componentDidMount(){
        console.log("component did mount is called");
    }
    render(){
        console.log("render");
        return(
            <div>
                <h2>Mounting Phase</h2>
                <p>scbjjkdjcdjdbdcnkjcdjcdnjcdnjkcnknewkncwjnjkcdwjdcnjdcnjdcjndcjndj</p>

            </div>
        )
    }
}
export default Mounting;