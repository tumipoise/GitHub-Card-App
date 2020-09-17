import React, { Component } from "react"

class ConditionalStyle extends Component{
    render() {
        return (
            <div style={{color: Math.random() < 0.5 ? 'green' : 'red'}}>
                TumiPoise
            </div>
        )
    }
}

export default ConditionalStyle