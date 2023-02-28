import React from 'react';
import '../css/error.css'
import { Link } from 'react-router-dom';
import {textLabel} from "../labels/TextLables"; 

export default function Error() {
    return(
        <section className="error">
            <div className="error_container">
                <div className="row">	
                    <div className="col">
                        <div className="col-sm-10 col-sm-offset-1  text-center">
                            <div className="four_zero_four_bg">
                                <h1 className="text_center ">{textLabel.ERROR}</h1>           
                            </div>               
                            <div className="contant_box_404" aria-labelledby="error-heading">
                                <h3 className="h2" id="error-heading">
                                    {textLabel.CONNECTION_ISSUE}
                                </h3>            
                                <p>the server may not be avaible!</p>
                                <Link  to="/" className="link_404" >
                                    {textLabel.GO_HOME}
                                </Link>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}