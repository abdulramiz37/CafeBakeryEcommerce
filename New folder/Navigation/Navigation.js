import React,{Component} from "react";
import {Link} from "react-router-dom";


class Navigation extends Component{
    render(){
        return(
            <div>
               <Link to='/about'>Home</Link> &emsp;
               {/* <Link>m</Link> 
               <Link>me</Link>  */}

               {/* <a href="csnn">habs</a> */}

            </div>
        )
    }
}
export default Navigation;