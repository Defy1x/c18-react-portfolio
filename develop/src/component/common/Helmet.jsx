import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Developer React Portfolio </title>
                    <meta name="description" content="Portfolio Website of Casandra McDonald." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
