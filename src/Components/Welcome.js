import React,{Component} from 'react';
import Welcome from "./Welcome.js";
import Header from "./Header.js";

class welcome extends Component {
     render(){
         return(
            <div>
            <Header>
                <Welcome />
            </Header>
            <h1>Welcome from my page</h1>
        </div>
         );
     }
 }
export default Welcome;