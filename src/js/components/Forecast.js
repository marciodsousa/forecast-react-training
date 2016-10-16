import React from "react";

export default class Forecast extends React.Component {

    constructor() {
        super();
    }
    
    render() {
        if (this.props.searchedLocation.timezone) {
            return (
                <div>
                    <h1>Searching results for {this.props.searchedLocation.timezone}:</h1>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}