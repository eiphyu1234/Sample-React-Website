import React from 'react';
import { Link,
         BrowserRouter as Router, 
         Switch,
         Route
        } from "react-router-dom";
import welcome from './Welcome.js';

const styles={
    lang:{
        width:400,
        paddingTop: 10,
    }
}

const Language = ({language}) => {
    return (
        <div>
            <center><h1>Choose your language</h1></center>
            {language.map((language) => (
                <center>
                    <Link href="/welcome">
                <div class="card-container" style={styles.lang} className="lang">
                       <img className= "card-image" src={language.flag} alt='flag' />
                        <div class="card-body">
                            <h4 class="card-title">{language.name}</h4>
                        </div>
                </div>
                </Link>
                </center>
                
            ))}
        </div>
        
    )
};

export default Language;