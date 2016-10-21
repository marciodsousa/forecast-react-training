import React from "react";
import { connect } from "react-redux";

import Footer from "./Footer";
import Forecast from "./Forecast";
import Header from "./Header";

import { fetchForecast } from "../actions/forecastActions";

@connect((store) => {
    return {
        forecast: store.locationForecast
    };
})
export default class Layout extends React.Component {
    changeFooter(location) {
        this.setState({ location });
        this.props.dispatch(fetchForecast({ location }));
    }

    processIconToBG() {
        const locationForecast = this.props.forecast.locationForecast;
        
         if (locationForecast.currentForecast) {
            //this.props.dispatch(fetchPast30DayForecast({ location: locationForecast.name }));
            return "header " + locationForecast.currentForecast.icon
         }
         return "header";
    }

    render() {

        this.process
        var forecast;

        if (this.props.forecast.loading && this.props.forecast.primaryLoading) {
            forecast =  (<h3>{this.props.forecast.loadingMessage}</h3>);
        }else{
            forecast = (<Forecast searchedLocation={this.props.forecast.locationForecast} loadingMessage={this.props.forecast.loadingMessage}/>);
        }

        const icon = this.processIconToBG();

        return (
            <div class="body-wrapper">
                    <header id="top" class={icon}>
                        <div class="text-vertical-center">
                            <Header changeTitle={this.changeFooter.bind(this)}/>
                            <br/>
                            {forecast}
                        </div>
                    </header>
                    <Footer />
            </div>
        );
    }
}