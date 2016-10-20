import React from "react";

export default class CurrentForecastComponent extends React.Component {

    constructor() {
        super();
    }

    processIcon() {
        return "./img/icons/" + this.props.currentForecast.icon + ".svg";
    }
    
    render() {
        return (
            <div class="thumbnail col-lg-8 col-lg-offset-3">
                <img class="card-img-left" width="200px" height="200px" src={this.processIcon()} alt={this.props.currentForecast.summary}/>
                <div class="card-block">
                    <h4 class="card-title">Currently</h4>
                    <p class="card-text">{this.props.currentForecast.summary}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Temperature: {this.props.currentForecast.temperature}ºC</li>
                    <li class="list-group-item">Windspeed: {this.props.currentForecast.windSpeed} km/h</li>
                    <li class="list-group-item">Humidity: {this.props.currentForecast.humidity}%</li>
                </ul>
            </div>
        );
    }
}