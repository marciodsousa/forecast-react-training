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
      
    render() {
        return (
            <div>
                <Header changeTitle={this.changeFooter.bind(this)}/>
                <Forecast searchedLocation={this.props.forecast.locationForecast}/>
                <Footer />
            </div>
        );
    }
}