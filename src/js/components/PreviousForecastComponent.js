import React from "react";

export default class PreviousForecastComponent extends React.Component {

    constructor() {
        super();
    }

    processIcon() {
        return "./img/icons/" + this.props.forecast.icon + ".svg";
    }
    
    render() {
        const forecastDate = new Date(Number(this.props.forecast.time));

        return (
            <div class="col-md-2 thumbnail">
                <img class="card-img-top" src={this.processIcon()} alt={this.props.forecast.summary}/>
                <div class="card-block">
                    <h4 class="card-title">{forecastDate.getDate() + "/" + forecastDate.getMonth()+1  + "/" + forecastDate.getFullYear()}</h4>
                    <p class="card-text">{this.props.forecast.summary}</p>
                    <p class="card-text">Max: {this.props.forecast.temperatureMax}ºC <small class="text-muted">@ {this.props.forecast.temperatureMaxTime}</small></p>
                    <p class="card-text">Min: {this.props.forecast.temperatureMin}ºC <small class="text-muted">@ {this.props.forecast.temperatureMinTime}</small></p>
                    <p class="card-text">Windspeed: {this.props.forecast.windSpeed} km/h</p>
                    <p class="card-text">Humidity: {this.props.forecast.humidity}%</p>
                </div>
            </div>);
    }
}