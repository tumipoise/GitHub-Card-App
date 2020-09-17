import React, { Component } from "react";

class Title extends Component{
    render() {
        
        const {title} = this.props

        return (
            <div className="header">
                {title}
            </div>
        )
    }
}

export default Title;
